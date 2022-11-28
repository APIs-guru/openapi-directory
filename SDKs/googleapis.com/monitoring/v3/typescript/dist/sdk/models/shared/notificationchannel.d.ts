import { SpeakeasyBase } from "../../../internal/utils";
import { MutationRecord } from "./mutationrecord";
export declare enum NotificationChannelVerificationStatusEnum {
    VerificationStatusUnspecified = "VERIFICATION_STATUS_UNSPECIFIED",
    Unverified = "UNVERIFIED",
    Verified = "VERIFIED"
}
/**
 * A NotificationChannel is a medium through which an alert is delivered when a policy violation is detected. Examples of channels include email, SMS, and third-party messaging applications. Fields containing sensitive information like authentication tokens or contact info are only partially populated on retrieval.
**/
export declare class NotificationChannel extends SpeakeasyBase {
    creationRecord?: MutationRecord;
    description?: string;
    displayName?: string;
    enabled?: boolean;
    labels?: Map<string, string>;
    mutationRecords?: MutationRecord[];
    name?: string;
    type?: string;
    userLabels?: Map<string, string>;
    verificationStatus?: NotificationChannelVerificationStatusEnum;
}
