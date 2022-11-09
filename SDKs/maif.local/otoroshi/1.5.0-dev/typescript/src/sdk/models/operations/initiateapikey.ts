import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InitiateApiKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class InitiateApiKeyRequest extends SpeakeasyBase {
  @Metadata()
  security: InitiateApiKeySecurity;
}


export class InitiateApiKeyResponse extends SpeakeasyBase {
  @Metadata()
  apiKey?: shared.ApiKey;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
