package shared

// GoogleCloudChannelV1FetchReportResultsResponse
// Response message for CloudChannelReportsService.FetchReportResults. Contains a tabular representation of the report results.
type GoogleCloudChannelV1FetchReportResultsResponse struct {
	NextPageToken  *string                                    `json:"nextPageToken,omitempty"`
	ReportMetadata *GoogleCloudChannelV1ReportResultsMetadata `json:"reportMetadata,omitempty"`
	Rows           []GoogleCloudChannelV1Row                  `json:"rows,omitempty"`
}
