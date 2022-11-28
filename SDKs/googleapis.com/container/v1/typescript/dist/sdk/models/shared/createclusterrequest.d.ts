import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterInput } from "./cluster";
/**
 * CreateClusterRequest creates a cluster.
**/
export declare class CreateClusterRequestInput extends SpeakeasyBase {
    cluster?: ClusterInput;
    parent?: string;
    projectId?: string;
    zone?: string;
}
