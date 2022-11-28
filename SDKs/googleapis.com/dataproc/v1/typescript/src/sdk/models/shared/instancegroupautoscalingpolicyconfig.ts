import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceGroupAutoscalingPolicyConfig
/** 
 * Configuration for the size bounds of an instance group, including its proportional size to other groups.
**/
export class InstanceGroupAutoscalingPolicyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxInstances" })
  maxInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=minInstances" })
  minInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
