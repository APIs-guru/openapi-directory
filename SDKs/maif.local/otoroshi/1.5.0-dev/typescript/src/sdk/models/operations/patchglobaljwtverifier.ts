import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchGlobalJwtVerifierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=verifierId" })
  verifierId: string;
}


export class PatchGlobalJwtVerifierSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PatchGlobalJwtVerifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchGlobalJwtVerifierPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Patch })
  request?: shared.Patch[];

  @SpeakeasyMetadata()
  security: PatchGlobalJwtVerifierSecurity;
}


export class PatchGlobalJwtVerifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalJwtVerifier?: shared.GlobalJwtVerifier;

  @SpeakeasyMetadata()
  statusCode: number;
}
