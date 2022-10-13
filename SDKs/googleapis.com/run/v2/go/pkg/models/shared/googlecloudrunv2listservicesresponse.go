package shared

type GoogleCloudRunV2ListServicesResponse struct {
	NextPageToken *string                   `json:"nextPageToken"`
	Services      []GoogleCloudRunV2Service `json:"services"`
}
