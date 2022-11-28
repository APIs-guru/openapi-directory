import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatientDemographic } from "./patientdemographic";



// PatientAuthConfirmRequestCredential
/** 
 * note, demographic details are only required for demographic auth at this point.
**/
export class PatientAuthConfirmRequestCredential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authCode" })
  authCode?: string;

  @SpeakeasyMetadata({ data: "json, name=demographic" })
  demographic?: PatientDemographic;
}


export class PatientAuthConfirmRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credential" })
  credential: PatientAuthConfirmRequestCredential;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId: string;
}
