import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaStatus } from "./replicastatus";



// UserManagedStatus
/** 
 * The replication status of a SecretVersion using user-managed replication. Only populated if the parent Secret has a user-managed replication policy.
**/
export class UserManagedStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=replicas", elemType: ReplicaStatus })
  replicas?: ReplicaStatus[];
}
