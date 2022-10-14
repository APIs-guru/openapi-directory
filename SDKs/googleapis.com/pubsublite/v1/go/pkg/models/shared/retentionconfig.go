package shared

type RetentionConfig struct {
	PerPartitionBytes *string `json:"perPartitionBytes,omitempty"`
	Period            *string `json:"period,omitempty"`
}
