import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatientDemographicResponse } from "./patientdemographicresponse";
import { AccessTokenValidity } from "./accesstokenvalidity";

export enum PatientAuthNotificationAuthStatusEnum {
    Granted = "GRANTED"
,    Denied = "DENIED"
}


// PatientAuthNotificationAuth
/** 
 * depending on the purpose of auth, as specified in /auth/init, the response may include the following 
 *   1. LINK - only returns **accessToken**
 *   2. KYC - only returns **patient**
 *   3. KYC_AND_LINK - returns both **accessToken** and **patient**
 * 
**/
export class PatientAuthNotificationAuth extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=patient" })
  patient?: PatientDemographicResponse;

  @Metadata({ data: "json, name=status" })
  status: PatientAuthNotificationAuthStatusEnum;

  @Metadata({ data: "json, name=transactionId" })
  transactionId: string;

  @Metadata({ data: "json, name=validity" })
  validity?: AccessTokenValidity;
}


export class PatientAuthNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth" })
  auth?: PatientAuthNotificationAuth;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
