import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedEncryptionStatus } from "./customermanagedencryptionstatus";



// AutomaticStatus
/** 
 * The replication status of a SecretVersion using automatic replication. Only populated if the parent Secret has an automatic replication policy.
**/
export class AutomaticStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedEncryption" })
  customerManagedEncryption?: CustomerManagedEncryptionStatus;
}
