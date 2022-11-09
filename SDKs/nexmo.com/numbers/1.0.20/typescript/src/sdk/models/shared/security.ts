import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=api_key" })
  apiKey: string;
}


export class SchemeApiSecret extends SpeakeasyBase {
  @Metadata({ data: "security, name=api_secret" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiSecret: SchemeApiSecret;
}
