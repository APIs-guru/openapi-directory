import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SelfManagedCertificate
/** 
 * Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility.
**/
export class SelfManagedCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=pemCertificate" })
  pemCertificate?: string;

  @Metadata({ data: "json, name=pemPrivateKey" })
  pemPrivateKey?: string;
}
