import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GkeNodePoolAutoscalingConfig } from "./gkenodepoolautoscalingconfig";
import { GkeNodeConfig } from "./gkenodeconfig";


// GkeNodePoolConfig
/** 
 * The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster).
**/
export class GkeNodePoolConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoscaling" })
  autoscaling?: GkeNodePoolAutoscalingConfig;

  @Metadata({ data: "json, name=config" })
  config?: GkeNodeConfig;

  @Metadata({ data: "json, name=locations" })
  locations?: string[];
}
