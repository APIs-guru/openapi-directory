import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudMlV1MetricSpecNameEnum {
    MetricNameUnspecified = "METRIC_NAME_UNSPECIFIED"
,    CpuUsage = "CPU_USAGE"
,    GpuDutyCycle = "GPU_DUTY_CYCLE"
}


// GoogleCloudMlV1MetricSpec
/** 
 * MetricSpec contains the specifications to use to calculate the desired nodes count when autoscaling is enabled.
**/
export class GoogleCloudMlV1MetricSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: GoogleCloudMlV1MetricSpecNameEnum;

  @Metadata({ data: "json, name=target" })
  target?: number;
}
