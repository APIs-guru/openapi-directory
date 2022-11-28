import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SetNodePoolSizeRequest sets the size of a node pool.
**/
export declare class SetNodePoolSizeRequest extends SpeakeasyBase {
    clusterId?: string;
    name?: string;
    nodeCount?: number;
    nodePoolId?: string;
    projectId?: string;
    zone?: string;
}
