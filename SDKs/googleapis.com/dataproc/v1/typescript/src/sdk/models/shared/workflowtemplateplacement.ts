import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterSelector } from "./clusterselector";
import { ManagedCluster } from "./managedcluster";
import { ManagedClusterInput } from "./managedcluster";



// WorkflowTemplatePlacement
/** 
 * Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
**/
export class WorkflowTemplatePlacement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterSelector" })
  clusterSelector?: ClusterSelector;

  @SpeakeasyMetadata({ data: "json, name=managedCluster" })
  managedCluster?: ManagedCluster;
}


// WorkflowTemplatePlacementInput
/** 
 * Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
**/
export class WorkflowTemplatePlacementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterSelector" })
  clusterSelector?: ClusterSelector;

  @SpeakeasyMetadata({ data: "json, name=managedCluster" })
  managedCluster?: ManagedClusterInput;
}
