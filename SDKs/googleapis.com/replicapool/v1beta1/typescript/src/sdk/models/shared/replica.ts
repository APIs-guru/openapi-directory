import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaStatus } from "./replicastatus";



// Replica
/** 
 * An individual Replica within a Pool. Replicas are automatically created by the replica pool, using the template provided by the user. You cannot directly create replicas.
**/
export class Replica extends SpeakeasyBase {
  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  selfLink?: string;

  @SpeakeasyMetadata()
  status?: ReplicaStatus;
}
