import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ManagedCredential
/** 
 * A securely-stored Credential that allows Linode's special forces to access a Managed server to respond to Issues.
 * 
**/
export class ManagedCredential extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=last_decrypted" })
  lastDecrypted?: Date;
}
