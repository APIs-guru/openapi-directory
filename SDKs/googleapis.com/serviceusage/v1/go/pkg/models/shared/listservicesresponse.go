package shared

type ListServicesResponse struct {
	NextPageToken *string                          `json:"nextPageToken"`
	Services      []GoogleAPIServiceusageV1Service `json:"services"`
}
