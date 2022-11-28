import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfigInput } from "./clusterconfig";
import { ClusterConfig } from "./clusterconfig";
/**
 * Cluster that is managed by the workflow.
**/
export declare class ManagedClusterInput extends SpeakeasyBase {
    clusterName?: string;
    config?: ClusterConfigInput;
    labels?: Map<string, string>;
}
/**
 * Cluster that is managed by the workflow.
**/
export declare class ManagedCluster extends SpeakeasyBase {
    clusterName?: string;
    config?: ClusterConfig;
    labels?: Map<string, string>;
}
