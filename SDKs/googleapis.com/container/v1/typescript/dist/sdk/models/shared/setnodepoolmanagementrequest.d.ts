import { SpeakeasyBase } from "../../../internal/utils";
import { NodeManagement } from "./nodemanagement";
/**
 * SetNodePoolManagementRequest sets the node management properties of a node pool.
**/
export declare class SetNodePoolManagementRequest extends SpeakeasyBase {
    clusterId?: string;
    management?: NodeManagement;
    name?: string;
    nodePoolId?: string;
    projectId?: string;
    zone?: string;
}
