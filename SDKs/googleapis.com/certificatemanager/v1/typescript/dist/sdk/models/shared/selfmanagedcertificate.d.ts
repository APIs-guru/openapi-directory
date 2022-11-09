import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility.
**/
export declare class SelfManagedCertificate extends SpeakeasyBase {
    pemCertificate?: string;
    pemPrivateKey?: string;
}
