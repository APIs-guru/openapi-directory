import { SpeakeasyBase } from "../../../internal/utils";
import { PatientDemographicResponse } from "./patientdemographicresponse";
import { AccessTokenValidity } from "./accesstokenvalidity";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
/**
 * depending on the purpose of auth, as specified in /auth/init, the response may include the following
 *   1. LINK - only returns **accessToken**
 *   2. KYC - only returns **patient**
 *   3. KYC_AND_LINK - returns both **accessToken** and **patient**
 *
**/
export declare class PatientAuthConfirmResponseAuth extends SpeakeasyBase {
    accessToken?: string;
    patient?: PatientDemographicResponse;
    validity?: AccessTokenValidity;
}
export declare class PatientAuthConfirmResponse extends SpeakeasyBase {
    auth?: PatientAuthConfirmResponseAuth;
    error?: Error;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
