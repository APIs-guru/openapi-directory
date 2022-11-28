import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=api_key" })
  apiKey: string;
}


export class SchemeApiSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=api_secret" })
  apiKey: string;
}


export class SecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiSecret: SchemeApiSecret;
}


export class SchemeApiSig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=sig" })
  apiKey: string;
}


export class SecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiSig: SchemeApiSig;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: SecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: SecurityOption2;
}
