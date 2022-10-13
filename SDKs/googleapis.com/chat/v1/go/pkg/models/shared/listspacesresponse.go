package shared

type ListSpacesResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Spaces        []Space `json:"spaces"`
}
