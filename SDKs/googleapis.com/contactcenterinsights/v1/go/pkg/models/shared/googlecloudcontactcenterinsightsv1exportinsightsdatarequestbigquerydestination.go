package shared

type GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination struct {
	Dataset   *string `json:"dataset,omitempty"`
	ProjectID *string `json:"projectId,omitempty"`
	Table     *string `json:"table,omitempty"`
}
