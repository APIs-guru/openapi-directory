import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GkeNodePoolAutoscalingConfig } from "./gkenodepoolautoscalingconfig";
import { GkeNodeConfig } from "./gkenodeconfig";



// GkeNodePoolConfig
/** 
 * The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster).
**/
export class GkeNodePoolConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoscaling" })
  autoscaling?: GkeNodePoolAutoscalingConfig;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: GkeNodeConfig;

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations?: string[];
}
