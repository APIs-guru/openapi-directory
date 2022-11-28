import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedEncryptionStatus } from "./customermanagedencryptionstatus";



// ReplicaStatus
/** 
 * Describes the status of a user-managed replica for the SecretVersion.
**/
export class ReplicaStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedEncryption" })
  customerManagedEncryption?: CustomerManagedEncryptionStatus;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}
