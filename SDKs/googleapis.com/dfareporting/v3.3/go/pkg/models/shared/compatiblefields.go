package shared

type CompatibleFields struct {
	CrossDimensionReachReportCompatibleFields *CrossDimensionReachReportCompatibleFields `json:"crossDimensionReachReportCompatibleFields"`
	FloodlightReportCompatibleFields          *FloodlightReportCompatibleFields          `json:"floodlightReportCompatibleFields"`
	Kind                                      *string                                    `json:"kind"`
	PathToConversionReportCompatibleFields    *PathToConversionReportCompatibleFields    `json:"pathToConversionReportCompatibleFields"`
	ReachReportCompatibleFields               *ReachReportCompatibleFields               `json:"reachReportCompatibleFields"`
	ReportCompatibleFields                    *ReportCompatibleFields                    `json:"reportCompatibleFields"`
}
