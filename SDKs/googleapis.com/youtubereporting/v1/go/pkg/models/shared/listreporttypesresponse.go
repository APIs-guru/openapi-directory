package shared

// ListReportTypesResponse
// Response message for ReportingService.ListReportTypes.
type ListReportTypesResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	ReportTypes   []ReportType `json:"reportTypes,omitempty"`
}
