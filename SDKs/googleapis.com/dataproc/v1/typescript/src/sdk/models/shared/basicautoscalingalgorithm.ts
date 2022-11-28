import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SparkStandaloneAutoscalingConfig } from "./sparkstandaloneautoscalingconfig";
import { BasicYarnAutoscalingConfig } from "./basicyarnautoscalingconfig";



// BasicAutoscalingAlgorithm
/** 
 * Basic algorithm for autoscaling.
**/
export class BasicAutoscalingAlgorithm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cooldownPeriod" })
  cooldownPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=sparkStandaloneConfig" })
  sparkStandaloneConfig?: SparkStandaloneAutoscalingConfig;

  @SpeakeasyMetadata({ data: "json, name=yarnConfig" })
  yarnConfig?: BasicYarnAutoscalingConfig;
}
