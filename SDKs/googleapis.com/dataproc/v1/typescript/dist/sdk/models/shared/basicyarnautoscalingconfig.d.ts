import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Basic autoscaling configurations for YARN.
**/
export declare class BasicYarnAutoscalingConfig extends SpeakeasyBase {
    gracefulDecommissionTimeout?: string;
    scaleDownFactor?: number;
    scaleDownMinWorkerFraction?: number;
    scaleUpFactor?: number;
    scaleUpMinWorkerFraction?: number;
}
