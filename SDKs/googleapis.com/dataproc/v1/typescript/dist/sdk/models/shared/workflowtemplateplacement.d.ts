import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterSelector } from "./clusterselector";
import { ManagedCluster } from "./managedcluster";
import { ManagedClusterInput } from "./managedcluster";
/**
 * Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
**/
export declare class WorkflowTemplatePlacement extends SpeakeasyBase {
    clusterSelector?: ClusterSelector;
    managedCluster?: ManagedCluster;
}
/**
 * Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
**/
export declare class WorkflowTemplatePlacementInput extends SpeakeasyBase {
    clusterSelector?: ClusterSelector;
    managedCluster?: ManagedClusterInput;
}
