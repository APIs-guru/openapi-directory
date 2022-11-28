import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterConfigInput } from "./clusterconfig";
import { ClusterConfig } from "./clusterconfig";



// ManagedClusterInput
/** 
 * Cluster that is managed by the workflow.
**/
export class ManagedClusterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ClusterConfigInput;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}


// ManagedCluster
/** 
 * Cluster that is managed by the workflow.
**/
export class ManagedCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ClusterConfig;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
