import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchGlobalJwtVerifierPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=verifierId" })
  verifierId: string;
}


export class PatchGlobalJwtVerifierSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PatchGlobalJwtVerifierRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchGlobalJwtVerifierPathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Patch })
  request?: shared.Patch[];

  @Metadata()
  security: PatchGlobalJwtVerifierSecurity;
}


export class PatchGlobalJwtVerifierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  globalJwtVerifier?: shared.GlobalJwtVerifier;

  @Metadata()
  statusCode: number;
}
