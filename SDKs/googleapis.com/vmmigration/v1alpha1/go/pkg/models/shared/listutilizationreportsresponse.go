package shared



type ListUtilizationReportsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    UtilizationReports []UtilizationReport `json:"utilizationReports,omitempty"`
    
}

