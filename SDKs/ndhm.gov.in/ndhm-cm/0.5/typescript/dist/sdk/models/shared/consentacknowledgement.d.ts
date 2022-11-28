import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConsentAcknowledgementStatusEnum {
    Ok = "OK",
    Unknown = "UNKNOWN"
}
export declare class ConsentAcknowledgement extends SpeakeasyBase {
    consentId: string;
    status: ConsentAcknowledgementStatusEnum;
}
