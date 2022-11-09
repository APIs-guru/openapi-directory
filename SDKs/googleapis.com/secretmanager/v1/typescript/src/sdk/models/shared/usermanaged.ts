import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Replica } from "./replica";


// UserManaged
/** 
 * A replication policy that replicates the Secret payload into the locations specified in Secret.replication.user_managed.replicas
**/
export class UserManaged extends SpeakeasyBase {
  @Metadata({ data: "json, name=replicas", elemType: shared.Replica })
  replicas?: Replica[];
}
