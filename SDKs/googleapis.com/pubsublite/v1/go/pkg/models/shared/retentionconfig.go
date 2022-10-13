package shared

type RetentionConfig struct {
	PerPartitionBytes *string `json:"perPartitionBytes"`
	Period            *string `json:"period"`
}
