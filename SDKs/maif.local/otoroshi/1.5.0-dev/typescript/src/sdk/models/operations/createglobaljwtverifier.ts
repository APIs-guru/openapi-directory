import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateGlobalJwtVerifierSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class CreateGlobalJwtVerifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.GlobalJwtVerifier;

  @SpeakeasyMetadata()
  security: CreateGlobalJwtVerifierSecurity;
}


export class CreateGlobalJwtVerifierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalJwtVerifier?: shared.GlobalJwtVerifier;

  @SpeakeasyMetadata()
  statusCode: number;
}
