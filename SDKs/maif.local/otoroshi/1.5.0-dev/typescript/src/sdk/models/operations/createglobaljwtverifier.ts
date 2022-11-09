import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGlobalJwtVerifierSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class CreateGlobalJwtVerifierRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GlobalJwtVerifier;

  @Metadata()
  security: CreateGlobalJwtVerifierSecurity;
}


export class CreateGlobalJwtVerifierResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  globalJwtVerifier?: shared.GlobalJwtVerifier;

  @Metadata()
  statusCode: number;
}
