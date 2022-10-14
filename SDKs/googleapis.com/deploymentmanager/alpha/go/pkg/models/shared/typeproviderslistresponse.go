package shared

type TypeProvidersListResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	TypeProviders []TypeProvider `json:"typeProviders,omitempty"`
}
