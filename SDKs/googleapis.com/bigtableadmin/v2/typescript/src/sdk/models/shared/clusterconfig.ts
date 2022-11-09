import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterAutoscalingConfig } from "./clusterautoscalingconfig";


// ClusterConfig
/** 
 * Configuration for a cluster.
**/
export class ClusterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterAutoscalingConfig" })
  clusterAutoscalingConfig?: ClusterAutoscalingConfig;
}
