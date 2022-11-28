package shared

// GoogleCloudChannelV1ListReportsResponse
// Response message for CloudChannelReportsService.ListReports.
type GoogleCloudChannelV1ListReportsResponse struct {
	NextPageToken *string                      `json:"nextPageToken,omitempty"`
	Reports       []GoogleCloudChannelV1Report `json:"reports,omitempty"`
}
