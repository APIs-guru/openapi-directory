import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AutoscalingConfig
/** 
 * Autoscaling Policy config associated with the cluster.
**/
export class AutoscalingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyUri" })
  policyUri?: string;
}
