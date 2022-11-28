import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Basic autoscaling configurations for Spark Standalone.
**/
export declare class SparkStandaloneAutoscalingConfig extends SpeakeasyBase {
    gracefulDecommissionTimeout?: string;
    scaleDownFactor?: number;
    scaleDownMinWorkerFraction?: number;
    scaleUpFactor?: number;
    scaleUpMinWorkerFraction?: number;
}
