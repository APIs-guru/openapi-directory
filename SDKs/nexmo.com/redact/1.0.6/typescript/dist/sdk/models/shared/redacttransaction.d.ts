import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum RedactTransactionProductEnum {
    Sms = "sms",
    Voice = "voice",
    NumberInsight = "number-insight",
    Verify = "verify",
    VerifySdk = "verify-sdk",
    Messages = "messages"
}
export declare enum RedactTransactionTypeEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}
export declare class RedactTransaction extends SpeakeasyBase {
    id: string;
    product: RedactTransactionProductEnum;
    type: RedactTransactionTypeEnum;
}
