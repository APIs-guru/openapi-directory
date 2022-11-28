import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SelfManagedCertificate
/** 
 * Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility.
**/
export class SelfManagedCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pemCertificate" })
  pemCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=pemPrivateKey" })
  pemPrivateKey?: string;
}
