import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AutoscalingConfig
/** 
 * Autoscaling Policy config associated with the cluster.
**/
export class AutoscalingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyUri" })
  policyUri?: string;
}
