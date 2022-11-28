import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterUpdate } from "./clusterupdate";
/**
 * UpdateClusterRequest updates the settings of a cluster.
**/
export declare class UpdateClusterRequest extends SpeakeasyBase {
    clusterId?: string;
    name?: string;
    projectId?: string;
    update?: ClusterUpdate;
    zone?: string;
}
