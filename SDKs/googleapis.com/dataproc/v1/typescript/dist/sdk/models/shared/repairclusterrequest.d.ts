import { SpeakeasyBase } from "../../../internal/utils";
import { NodePool } from "./nodepool";
/**
 * A request to repair a cluster.
**/
export declare class RepairClusterRequest extends SpeakeasyBase {
    clusterUuid?: string;
    gracefulDecommissionTimeout?: string;
    nodePools?: NodePool[];
    parentOperationId?: string;
    requestId?: string;
}
