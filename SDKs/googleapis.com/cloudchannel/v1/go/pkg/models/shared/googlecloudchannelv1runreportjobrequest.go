package shared

// GoogleCloudChannelV1RunReportJobRequest
// Request message for CloudChannelReportsService.RunReportJob.
type GoogleCloudChannelV1RunReportJobRequest struct {
	DateRange    *GoogleCloudChannelV1DateRange `json:"dateRange,omitempty"`
	Filter       *string                        `json:"filter,omitempty"`
	LanguageCode *string                        `json:"languageCode,omitempty"`
}
