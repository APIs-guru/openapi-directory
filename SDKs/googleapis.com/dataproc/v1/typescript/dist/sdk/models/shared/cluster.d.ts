import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfigInput } from "./clusterconfig";
import { ClusterMetrics } from "./clustermetrics";
import { VirtualClusterConfig } from "./virtualclusterconfig";
import { ClusterConfig } from "./clusterconfig";
import { ClusterStatus } from "./clusterstatus";
/**
 * Describes the identifying information, config, and status of a Dataproc cluster
**/
export declare class ClusterInput extends SpeakeasyBase {
    clusterName?: string;
    config?: ClusterConfigInput;
    labels?: Map<string, string>;
    metrics?: ClusterMetrics;
    projectId?: string;
    virtualClusterConfig?: VirtualClusterConfig;
}
/**
 * Describes the identifying information, config, and status of a Dataproc cluster
**/
export declare class Cluster extends SpeakeasyBase {
    clusterName?: string;
    clusterUuid?: string;
    config?: ClusterConfig;
    labels?: Map<string, string>;
    metrics?: ClusterMetrics;
    projectId?: string;
    status?: ClusterStatus;
    statusHistory?: ClusterStatus[];
    virtualClusterConfig?: VirtualClusterConfig;
}
