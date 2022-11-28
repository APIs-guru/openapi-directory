package shared

// GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination
// A BigQuery Table Reference.
type GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination struct {
	Dataset   *string `json:"dataset,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
	Table     *string `json:"table,omitempty"`
}
