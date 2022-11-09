import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HorizontalPodAutoscaling
/** 
 * Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.
**/
export class HorizontalPodAutoscaling extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;
}
