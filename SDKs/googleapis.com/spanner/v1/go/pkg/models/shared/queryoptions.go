package shared

// QueryOptions
// Query optimizer configuration.
type QueryOptions struct {
	OptimizerStatisticsPackage *string `json:"optimizerStatisticsPackage,omitempty"`
	OptimizerVersion           *string `json:"optimizerVersion,omitempty"`
}
