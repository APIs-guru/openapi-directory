package shared

// GoogleCloudChannelV1ReportResultsMetadata
// The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults.
type GoogleCloudChannelV1ReportResultsMetadata struct {
	DateRange          *GoogleCloudChannelV1DateRange `json:"dateRange,omitempty"`
	PrecedingDateRange *GoogleCloudChannelV1DateRange `json:"precedingDateRange,omitempty"`
	Report             *GoogleCloudChannelV1Report    `json:"report,omitempty"`
	RowCount           *string                        `json:"rowCount,omitempty"`
}
