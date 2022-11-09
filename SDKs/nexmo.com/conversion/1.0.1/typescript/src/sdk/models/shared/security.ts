import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=api_key" })
  apiKey: string;
}


export class SchemeApiSecret extends SpeakeasyBase {
  @Metadata({ data: "security, name=api_secret" })
  apiKey: string;
}


export class SchemeApiSig extends SpeakeasyBase {
  @Metadata({ data: "security, name=sig" })
  apiKey: string;
}


export class SecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiSecret: SchemeApiSecret;
}


export class SecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiSig: SchemeApiSig;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SecurityOption2;
}
