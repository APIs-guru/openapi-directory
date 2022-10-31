package shared



type ListReportTypesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ReportTypes []ReportType `json:"reportTypes,omitempty"`
    
}

