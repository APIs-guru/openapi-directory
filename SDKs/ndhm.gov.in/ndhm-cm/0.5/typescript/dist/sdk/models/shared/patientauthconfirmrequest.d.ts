import { SpeakeasyBase } from "../../../internal/utils";
import { PatientDemographic } from "./patientdemographic";
/**
 * note, demographic details are only required for demographic verfication.
**/
export declare class PatientAuthConfirmRequestCredential extends SpeakeasyBase {
    authCode?: string;
    demographic?: PatientDemographic;
}
export declare class PatientAuthConfirmRequest extends SpeakeasyBase {
    credential: PatientAuthConfirmRequestCredential;
    requestId: string;
    timestamp: Date;
    transactionId: string;
}
