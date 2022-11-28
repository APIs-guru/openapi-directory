import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedEncryptionStatus } from "./customermanagedencryptionstatus";
/**
 * The replication status of a SecretVersion using automatic replication. Only populated if the parent Secret has an automatic replication policy.
**/
export declare class AutomaticStatus extends SpeakeasyBase {
    customerManagedEncryption?: CustomerManagedEncryptionStatus;
}
