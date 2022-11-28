import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterAutoscalingConfig } from "./clusterautoscalingconfig";



// ClusterConfig
/** 
 * Configuration for a cluster.
**/
export class ClusterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterAutoscalingConfig" })
  clusterAutoscalingConfig?: ClusterAutoscalingConfig;
}
