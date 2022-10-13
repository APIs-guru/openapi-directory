package shared

type PathToConversionReportCompatibleFields struct {
	ConversionDimensions      []Dimension `json:"conversionDimensions"`
	CustomFloodlightVariables []Dimension `json:"customFloodlightVariables"`
	Kind                      *string     `json:"kind"`
	Metrics                   []Metric    `json:"metrics"`
	PerInteractionDimensions  []Dimension `json:"perInteractionDimensions"`
}
