import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ManagedCredentialInput
/** 
 * A securely-stored Credential that allows Linode's special forces to access a Managed server to respond to Issues.
 * 
**/
export class ManagedCredentialInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}


// ManagedCredential
/** 
 * A securely-stored Credential that allows Linode's special forces to access a Managed server to respond to Issues.
 * 
**/
export class ManagedCredential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=last_decrypted" })
  lastDecrypted?: Date;
}
