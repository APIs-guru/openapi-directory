import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGlobalJwtVerifierPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=verifierId" })
  verifierId: string;
}


export class UpdateGlobalJwtVerifierSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateGlobalJwtVerifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGlobalJwtVerifierPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GlobalJwtVerifier;

  @SpeakeasyMetadata()
  security: UpdateGlobalJwtVerifierSecurity;
}


export class UpdateGlobalJwtVerifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalJwtVerifier?: shared.GlobalJwtVerifier;

  @SpeakeasyMetadata()
  statusCode: number;
}
