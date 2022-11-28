package shared

// CompatibleFields
// Represents a response to the queryCompatibleFields method.
type CompatibleFields struct {
	CrossDimensionReachReportCompatibleFields *CrossDimensionReachReportCompatibleFields `json:"crossDimensionReachReportCompatibleFields,omitempty"`
	FloodlightReportCompatibleFields          *FloodlightReportCompatibleFields          `json:"floodlightReportCompatibleFields,omitempty"`
	Kind                                      *string                                    `json:"kind,omitempty"`
	PathToConversionReportCompatibleFields    *PathToConversionReportCompatibleFields    `json:"pathToConversionReportCompatibleFields,omitempty"`
	ReachReportCompatibleFields               *ReachReportCompatibleFields               `json:"reachReportCompatibleFields,omitempty"`
	ReportCompatibleFields                    *ReportCompatibleFields                    `json:"reportCompatibleFields,omitempty"`
}
