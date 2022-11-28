import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoscalingLimits
/** 
 * Limits for the number of nodes a Cluster can autoscale up/down to.
**/
export class AutoscalingLimits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxServeNodes" })
  maxServeNodes?: number;

  @SpeakeasyMetadata({ data: "json, name=minServeNodes" })
  minServeNodes?: number;
}
