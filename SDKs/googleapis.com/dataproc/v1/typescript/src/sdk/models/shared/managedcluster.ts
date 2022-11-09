import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterConfig } from "./clusterconfig";


// ManagedCluster
/** 
 * Cluster that is managed by the workflow.
**/
export class ManagedCluster extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=config" })
  config?: ClusterConfig;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
