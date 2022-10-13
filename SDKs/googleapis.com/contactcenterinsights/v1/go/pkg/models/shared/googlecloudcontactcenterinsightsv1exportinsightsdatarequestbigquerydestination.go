package shared

type GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination struct {
	Dataset   *string `json:"dataset"`
	ProjectID *string `json:"projectId"`
	Table     *string `json:"table"`
}
