import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterSelector } from "./clusterselector";
import { ManagedCluster } from "./managedcluster";


// WorkflowTemplatePlacement
/** 
 * Specifies workflow execution target.Either managed_cluster or cluster_selector is required.
**/
export class WorkflowTemplatePlacement extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterSelector" })
  clusterSelector?: ClusterSelector;

  @Metadata({ data: "json, name=managedCluster" })
  managedCluster?: ManagedCluster;
}
