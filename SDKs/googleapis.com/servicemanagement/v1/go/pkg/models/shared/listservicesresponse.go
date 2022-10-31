package shared

type ListServicesResponse struct {
	NextPageToken *string          `json:"nextPageToken,omitempty"`
	Services      []ManagedService `json:"services,omitempty"`
}
