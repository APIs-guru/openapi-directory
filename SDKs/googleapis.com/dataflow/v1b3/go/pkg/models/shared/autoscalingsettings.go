package shared

type AutoscalingSettingsAlgorithmEnum string

const (
	AutoscalingSettingsAlgorithmEnumAutoscalingAlgorithmUnknown AutoscalingSettingsAlgorithmEnum = "AUTOSCALING_ALGORITHM_UNKNOWN"
	AutoscalingSettingsAlgorithmEnumAutoscalingAlgorithmNone    AutoscalingSettingsAlgorithmEnum = "AUTOSCALING_ALGORITHM_NONE"
	AutoscalingSettingsAlgorithmEnumAutoscalingAlgorithmBasic   AutoscalingSettingsAlgorithmEnum = "AUTOSCALING_ALGORITHM_BASIC"
)

type AutoscalingSettings struct {
	Algorithm     *AutoscalingSettingsAlgorithmEnum `json:"algorithm,omitempty"`
	MaxNumWorkers *int32                            `json:"maxNumWorkers,omitempty"`
}
