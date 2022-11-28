import { SpeakeasyBase } from "../../../internal/utils";
import { GkeNodePoolAutoscalingConfig } from "./gkenodepoolautoscalingconfig";
import { GkeNodeConfig } from "./gkenodeconfig";
/**
 * The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster).
**/
export declare class GkeNodePoolConfig extends SpeakeasyBase {
    autoscaling?: GkeNodePoolAutoscalingConfig;
    config?: GkeNodeConfig;
    locations?: string[];
}
