import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicaStatus } from "./replicastatus";
/**
 * The replication status of a SecretVersion using user-managed replication. Only populated if the parent Secret has a user-managed replication policy.
**/
export declare class UserManagedStatus extends SpeakeasyBase {
    replicas?: ReplicaStatus[];
}
