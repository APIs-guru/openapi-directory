package shared

type ListServicesResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Services      []Service `json:"services"`
}
