package shared

type TypeProvidersListResponse struct {
	NextPageToken *string        `json:"nextPageToken"`
	TypeProviders []TypeProvider `json:"typeProviders"`
}
