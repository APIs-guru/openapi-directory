import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VerticalPodAutoscaling
/** 
 * VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it.
**/
export class VerticalPodAutoscaling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
