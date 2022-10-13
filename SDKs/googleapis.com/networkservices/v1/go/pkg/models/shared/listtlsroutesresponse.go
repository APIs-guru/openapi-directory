package shared

type ListTLSRoutesResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	TLSRoutes     []TLSRoute `json:"tlsRoutes"`
}
