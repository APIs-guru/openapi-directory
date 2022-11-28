import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudMlV1MetricSpecNameEnum {
    MetricNameUnspecified = "METRIC_NAME_UNSPECIFIED",
    CpuUsage = "CPU_USAGE",
    GpuDutyCycle = "GPU_DUTY_CYCLE"
}
/**
 * MetricSpec contains the specifications to use to calculate the desired nodes count when autoscaling is enabled.
**/
export declare class GoogleCloudMlV1MetricSpec extends SpeakeasyBase {
    name?: GoogleCloudMlV1MetricSpecNameEnum;
    target?: number;
}
