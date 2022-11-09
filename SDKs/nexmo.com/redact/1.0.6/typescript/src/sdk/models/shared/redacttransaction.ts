import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RedactTransactionProductEnum {
    Sms = "sms"
,    Voice = "voice"
,    NumberInsight = "number-insight"
,    Verify = "verify"
,    VerifySdk = "verify-sdk"
,    Messages = "messages"
}

export enum RedactTransactionTypeEnum {
    Inbound = "inbound"
,    Outbound = "outbound"
}


export class RedactTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=product" })
  product: RedactTransactionProductEnum;

  @Metadata({ data: "json, name=type" })
  type: RedactTransactionTypeEnum;
}
