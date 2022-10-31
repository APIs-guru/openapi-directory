package shared



type CompatibleFields struct {
    CrossDimensionReachReportCompatibleFields *CrossDimensionReachReportCompatibleFields `json:"crossDimensionReachReportCompatibleFields,omitempty"`
    FloodlightReportCompatibleFields *FloodlightReportCompatibleFields `json:"floodlightReportCompatibleFields,omitempty"`
    Kind *string `json:"kind,omitempty"`
    PathAttributionReportCompatibleFields *PathReportCompatibleFields `json:"pathAttributionReportCompatibleFields,omitempty"`
    PathReportCompatibleFields *PathReportCompatibleFields `json:"pathReportCompatibleFields,omitempty"`
    PathToConversionReportCompatibleFields *PathToConversionReportCompatibleFields `json:"pathToConversionReportCompatibleFields,omitempty"`
    ReachReportCompatibleFields *ReachReportCompatibleFields `json:"reachReportCompatibleFields,omitempty"`
    ReportCompatibleFields *ReportCompatibleFields `json:"reportCompatibleFields,omitempty"`
    
}

