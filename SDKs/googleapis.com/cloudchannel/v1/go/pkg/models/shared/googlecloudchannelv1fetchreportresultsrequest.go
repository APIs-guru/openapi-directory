package shared

// GoogleCloudChannelV1FetchReportResultsRequest
// Request message for CloudChannelReportsService.FetchReportResults.
type GoogleCloudChannelV1FetchReportResultsRequest struct {
	PageSize  *int32  `json:"pageSize,omitempty"`
	PageToken *string `json:"pageToken,omitempty"`
}
