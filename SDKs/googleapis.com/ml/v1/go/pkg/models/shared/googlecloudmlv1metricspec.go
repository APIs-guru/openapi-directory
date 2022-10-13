package shared

type GoogleCloudMlV1MetricSpecNameEnum string

const (
	GoogleCloudMlV1MetricSpecNameEnumMetricNameUnspecified GoogleCloudMlV1MetricSpecNameEnum = "METRIC_NAME_UNSPECIFIED"
	GoogleCloudMlV1MetricSpecNameEnumCPUUsage              GoogleCloudMlV1MetricSpecNameEnum = "CPU_USAGE"
	GoogleCloudMlV1MetricSpecNameEnumGpuDutyCycle          GoogleCloudMlV1MetricSpecNameEnum = "GPU_DUTY_CYCLE"
)

type GoogleCloudMlV1MetricSpec struct {
	Name   *GoogleCloudMlV1MetricSpecNameEnum `json:"name"`
	Target *int32                             `json:"target"`
}
