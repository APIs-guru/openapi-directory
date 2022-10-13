package shared

type FloodlightReportCompatibleFields struct {
	DimensionFilters []Dimension `json:"dimensionFilters"`
	Dimensions       []Dimension `json:"dimensions"`
	Kind             *string     `json:"kind"`
	Metrics          []Metric    `json:"metrics"`
}
