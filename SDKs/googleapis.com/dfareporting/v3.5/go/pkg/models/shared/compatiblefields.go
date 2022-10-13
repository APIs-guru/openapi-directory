package shared

type CompatibleFields struct {
	CrossDimensionReachReportCompatibleFields *CrossDimensionReachReportCompatibleFields `json:"crossDimensionReachReportCompatibleFields"`
	FloodlightReportCompatibleFields          *FloodlightReportCompatibleFields          `json:"floodlightReportCompatibleFields"`
	Kind                                      *string                                    `json:"kind"`
	PathAttributionReportCompatibleFields     *PathReportCompatibleFields                `json:"pathAttributionReportCompatibleFields"`
	PathReportCompatibleFields                *PathReportCompatibleFields                `json:"pathReportCompatibleFields"`
	PathToConversionReportCompatibleFields    *PathToConversionReportCompatibleFields    `json:"pathToConversionReportCompatibleFields"`
	ReachReportCompatibleFields               *ReachReportCompatibleFields               `json:"reachReportCompatibleFields"`
	ReportCompatibleFields                    *ReportCompatibleFields                    `json:"reportCompatibleFields"`
}
