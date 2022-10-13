package shared

type BasicAutoscalingAlgorithm struct {
	CooldownPeriod        *string                           `json:"cooldownPeriod"`
	SparkStandaloneConfig *SparkStandaloneAutoscalingConfig `json:"sparkStandaloneConfig"`
	YarnConfig            *BasicYarnAutoscalingConfig       `json:"yarnConfig"`
}
