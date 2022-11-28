package shared

type GoogleCloudMlV1MetricSpecNameEnum string

const (
	GoogleCloudMlV1MetricSpecNameEnumMetricNameUnspecified GoogleCloudMlV1MetricSpecNameEnum = "METRIC_NAME_UNSPECIFIED"
	GoogleCloudMlV1MetricSpecNameEnumCPUUsage              GoogleCloudMlV1MetricSpecNameEnum = "CPU_USAGE"
	GoogleCloudMlV1MetricSpecNameEnumGpuDutyCycle          GoogleCloudMlV1MetricSpecNameEnum = "GPU_DUTY_CYCLE"
)

// GoogleCloudMlV1MetricSpec
// MetricSpec contains the specifications to use to calculate the desired nodes count when autoscaling is enabled.
type GoogleCloudMlV1MetricSpec struct {
	Name   *GoogleCloudMlV1MetricSpecNameEnum `json:"name,omitempty"`
	Target *int32                             `json:"target,omitempty"`
}
