package shared

type TypeProvidersListTypesResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	Types         []TypeInfo `json:"types"`
}
