package shared

type PathToConversionReportCompatibleFields struct {
	ConversionDimensions      []Dimension `json:"conversionDimensions,omitempty"`
	CustomFloodlightVariables []Dimension `json:"customFloodlightVariables,omitempty"`
	Kind                      *string     `json:"kind,omitempty"`
	Metrics                   []Metric    `json:"metrics,omitempty"`
	PerInteractionDimensions  []Dimension `json:"perInteractionDimensions,omitempty"`
}
