package shared

// GoogleCloudRunV2ListServicesResponse
// Response message containing a list of Services.
type GoogleCloudRunV2ListServicesResponse struct {
	NextPageToken *string                   `json:"nextPageToken,omitempty"`
	Services      []GoogleCloudRunV2Service `json:"services,omitempty"`
}
