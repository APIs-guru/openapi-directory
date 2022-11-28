import { SpeakeasyBase } from "../../../internal/utils";
import { SparkStandaloneAutoscalingConfig } from "./sparkstandaloneautoscalingconfig";
import { BasicYarnAutoscalingConfig } from "./basicyarnautoscalingconfig";
/**
 * Basic algorithm for autoscaling.
**/
export declare class BasicAutoscalingAlgorithm extends SpeakeasyBase {
    cooldownPeriod?: string;
    sparkStandaloneConfig?: SparkStandaloneAutoscalingConfig;
    yarnConfig?: BasicYarnAutoscalingConfig;
}
