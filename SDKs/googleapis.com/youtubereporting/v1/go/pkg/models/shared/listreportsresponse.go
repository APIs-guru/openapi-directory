package shared

// ListReportsResponse
// Response message for ReportingService.ListReports.
type ListReportsResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Reports       []Report `json:"reports,omitempty"`
}
