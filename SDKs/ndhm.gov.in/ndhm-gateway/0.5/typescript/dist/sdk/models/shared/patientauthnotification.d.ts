import { SpeakeasyBase } from "../../../internal/utils";
import { PatientDemographicResponse } from "./patientdemographicresponse";
import { AccessTokenValidity } from "./accesstokenvalidity";
export declare enum PatientAuthNotificationAuthStatusEnum {
    Granted = "GRANTED",
    Denied = "DENIED"
}
/**
 * depending on the purpose of auth, as specified in /auth/init, the response may include the following
 *   1. LINK - only returns **accessToken**
 *   2. KYC - only returns **patient**
 *   3. KYC_AND_LINK - returns both **accessToken** and **patient**
 *
**/
export declare class PatientAuthNotificationAuth extends SpeakeasyBase {
    accessToken?: string;
    patient?: PatientDemographicResponse;
    status: PatientAuthNotificationAuthStatusEnum;
    transactionId: string;
    validity?: AccessTokenValidity;
}
export declare class PatientAuthNotification extends SpeakeasyBase {
    auth?: PatientAuthNotificationAuth;
    requestId: string;
    timestamp: Date;
}
