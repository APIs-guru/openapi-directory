import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGlobalJwtVerifierPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=verifierId" })
  verifierId: string;
}


export class UpdateGlobalJwtVerifierSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateGlobalJwtVerifierRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGlobalJwtVerifierPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GlobalJwtVerifier;

  @Metadata()
  security: UpdateGlobalJwtVerifierSecurity;
}


export class UpdateGlobalJwtVerifierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  globalJwtVerifier?: shared.GlobalJwtVerifier;

  @Metadata()
  statusCode: number;
}
