import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatientDemographicResponse } from "./patientdemographicresponse";
import { AccessTokenValidity } from "./accesstokenvalidity";
import { Error } from "./error";
import { RequestReference } from "./requestreference";



// PatientAuthConfirmResponseAuth
/** 
 * depending on the purpose of auth, as specified in /auth/init, the response may include the following 
 *   1. LINK - only returns **accessToken**
 *   2. KYC - only returns **patient**
 *   3. KYC_AND_LINK - returns both **accessToken** and **patient**
 * 
**/
export class PatientAuthConfirmResponseAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient?: PatientDemographicResponse;

  @SpeakeasyMetadata({ data: "json, name=validity" })
  validity?: AccessTokenValidity;
}


export class PatientAuthConfirmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth" })
  auth?: PatientAuthConfirmResponseAuth;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
