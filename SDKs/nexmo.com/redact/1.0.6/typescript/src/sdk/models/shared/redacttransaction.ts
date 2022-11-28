import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RedactTransactionProductEnum {
    Sms = "sms",
    Voice = "voice",
    NumberInsight = "number-insight",
    Verify = "verify",
    VerifySdk = "verify-sdk",
    Messages = "messages"
}

export enum RedactTransactionTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}


export class RedactTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product: RedactTransactionProductEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: RedactTransactionTypeEnum;
}
