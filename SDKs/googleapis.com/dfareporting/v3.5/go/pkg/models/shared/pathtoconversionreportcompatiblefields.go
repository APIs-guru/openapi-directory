package shared

// PathToConversionReportCompatibleFields
// Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION".
type PathToConversionReportCompatibleFields struct {
	ConversionDimensions      []Dimension `json:"conversionDimensions,omitempty"`
	CustomFloodlightVariables []Dimension `json:"customFloodlightVariables,omitempty"`
	Kind                      *string     `json:"kind,omitempty"`
	Metrics                   []Metric    `json:"metrics,omitempty"`
	PerInteractionDimensions  []Dimension `json:"perInteractionDimensions,omitempty"`
}
