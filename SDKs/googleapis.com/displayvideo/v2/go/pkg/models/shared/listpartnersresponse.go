package shared

type ListPartnersResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Partners      []Partner `json:"partners"`
}
