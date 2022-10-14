package shared

type ListServicesResponse struct {
	NextPageToken *string                          `json:"nextPageToken,omitempty"`
	Services      []GoogleAPIServiceusageV1Service `json:"services,omitempty"`
}
