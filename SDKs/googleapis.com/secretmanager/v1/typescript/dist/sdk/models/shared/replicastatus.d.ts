import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedEncryptionStatus } from "./customermanagedencryptionstatus";
/**
 * Describes the status of a user-managed replica for the SecretVersion.
**/
export declare class ReplicaStatus extends SpeakeasyBase {
    customerManagedEncryption?: CustomerManagedEncryptionStatus;
    location?: string;
}
