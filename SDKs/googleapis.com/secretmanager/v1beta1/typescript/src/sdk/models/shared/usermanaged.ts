import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Replica } from "./replica";



// UserManaged
/** 
 * A replication policy that replicates the Secret payload into the locations specified in Secret.replication.user_managed.replicas
**/
export class UserManaged extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=replicas", elemType: Replica })
  replicas?: Replica[];
}
