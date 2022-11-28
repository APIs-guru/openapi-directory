import { SpeakeasyBase } from "../../../internal/utils";
import { NodePool } from "./nodepool";
/**
 * CreateNodePoolRequest creates a node pool for a cluster.
**/
export declare class CreateNodePoolRequest extends SpeakeasyBase {
    clusterId?: string;
    nodePool?: NodePool;
    parent?: string;
    projectId?: string;
    zone?: string;
}
