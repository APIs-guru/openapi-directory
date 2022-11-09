import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicaStatus } from "./replicastatus";


// UserManagedStatus
/** 
 * The replication status of a SecretVersion using user-managed replication. Only populated if the parent Secret has a user-managed replication policy.
**/
export class UserManagedStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=replicas", elemType: shared.ReplicaStatus })
  replicas?: ReplicaStatus[];
}
