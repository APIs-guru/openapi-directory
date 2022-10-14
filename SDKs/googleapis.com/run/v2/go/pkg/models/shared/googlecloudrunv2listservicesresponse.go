package shared

type GoogleCloudRunV2ListServicesResponse struct {
	NextPageToken *string                   `json:"nextPageToken,omitempty"`
	Services      []GoogleCloudRunV2Service `json:"services,omitempty"`
}
