import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerManagedEncryptionStatus } from "./customermanagedencryptionstatus";


// ReplicaStatus
/** 
 * Describes the status of a user-managed replica for the SecretVersion.
**/
export class ReplicaStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerManagedEncryption" })
  customerManagedEncryption?: CustomerManagedEncryptionStatus;

  @Metadata({ data: "json, name=location" })
  location?: string;
}
