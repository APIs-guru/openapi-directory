import { SpeakeasyBase } from "../../../internal/utils";
import { Replica } from "./replica";
/**
 * A replication policy that replicates the Secret payload into the locations specified in Secret.replication.user_managed.replicas
**/
export declare class UserManaged extends SpeakeasyBase {
    replicas?: Replica[];
}
