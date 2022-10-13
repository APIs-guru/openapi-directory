package shared

type QueryOptions struct {
	OptimizerStatisticsPackage *string `json:"optimizerStatisticsPackage"`
	OptimizerVersion           *string `json:"optimizerVersion"`
}
