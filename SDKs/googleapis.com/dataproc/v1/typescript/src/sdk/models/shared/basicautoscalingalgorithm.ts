import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SparkStandaloneAutoscalingConfig } from "./sparkstandaloneautoscalingconfig";
import { BasicYarnAutoscalingConfig } from "./basicyarnautoscalingconfig";


// BasicAutoscalingAlgorithm
/** 
 * Basic algorithm for autoscaling.
**/
export class BasicAutoscalingAlgorithm extends SpeakeasyBase {
  @Metadata({ data: "json, name=cooldownPeriod" })
  cooldownPeriod?: string;

  @Metadata({ data: "json, name=sparkStandaloneConfig" })
  sparkStandaloneConfig?: SparkStandaloneAutoscalingConfig;

  @Metadata({ data: "json, name=yarnConfig" })
  yarnConfig?: BasicYarnAutoscalingConfig;
}
