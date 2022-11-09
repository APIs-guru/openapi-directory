import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatientDemographic } from "./patientdemographic";


// PatientAuthConfirmRequestCredential
/** 
 * note, demographic details are only required for demographic verfication.
**/
export class PatientAuthConfirmRequestCredential extends SpeakeasyBase {
  @Metadata({ data: "json, name=authCode" })
  authCode?: string;

  @Metadata({ data: "json, name=demographic" })
  demographic?: PatientDemographic;
}


export class PatientAuthConfirmRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=credential" })
  credential: PatientAuthConfirmRequestCredential;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=transactionId" })
  transactionId: string;
}
