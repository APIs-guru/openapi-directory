package shared

// FloodlightReportCompatibleFields
// Represents fields that are compatible to be selected for a report of type "FlOODLIGHT".
type FloodlightReportCompatibleFields struct {
	DimensionFilters []Dimension `json:"dimensionFilters,omitempty"`
	Dimensions       []Dimension `json:"dimensions,omitempty"`
	Kind             *string     `json:"kind,omitempty"`
	Metrics          []Metric    `json:"metrics,omitempty"`
}
