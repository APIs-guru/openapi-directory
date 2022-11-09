import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoscalingLimits
/** 
 * Limits for the number of nodes a Cluster can autoscale up/down to.
**/
export class AutoscalingLimits extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxServeNodes" })
  maxServeNodes?: number;

  @Metadata({ data: "json, name=minServeNodes" })
  minServeNodes?: number;
}
