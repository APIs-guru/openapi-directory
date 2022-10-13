package shared

type ListServicesResponse struct {
	NextPageToken *string          `json:"nextPageToken"`
	Services      []ManagedService `json:"services"`
}
