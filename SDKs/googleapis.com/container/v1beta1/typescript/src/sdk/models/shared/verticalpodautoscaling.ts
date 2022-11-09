import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VerticalPodAutoscaling
/** 
 * VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it.
**/
export class VerticalPodAutoscaling extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
