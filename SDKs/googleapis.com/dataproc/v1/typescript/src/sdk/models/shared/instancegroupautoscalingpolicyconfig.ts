import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceGroupAutoscalingPolicyConfig
/** 
 * Configuration for the size bounds of an instance group, including its proportional size to other groups.
**/
export class InstanceGroupAutoscalingPolicyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxInstances" })
  maxInstances?: number;

  @Metadata({ data: "json, name=minInstances" })
  minInstances?: number;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
