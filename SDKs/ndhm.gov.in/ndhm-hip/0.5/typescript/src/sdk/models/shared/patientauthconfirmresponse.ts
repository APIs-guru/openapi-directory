import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=patient" })
  patient?: PatientDemographicResponse;

  @Metadata({ data: "json, name=validity" })
  validity?: AccessTokenValidity;
}


export class PatientAuthConfirmResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth" })
  auth?: PatientAuthConfirmResponseAuth;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
