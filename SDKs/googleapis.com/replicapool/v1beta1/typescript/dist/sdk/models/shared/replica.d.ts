import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaStatus } from "./replicastatus";
/**
 * An individual Replica within a Pool. Replicas are automatically created by the replica pool, using the template provided by the user. You cannot directly create replicas.
**/
export declare class Replica extends SpeakeasyBase {
    name?: string;
    selfLink?: string;
    status?: ReplicaStatus;
}
