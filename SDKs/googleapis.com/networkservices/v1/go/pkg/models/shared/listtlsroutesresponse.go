package shared

type ListTLSRoutesResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	TLSRoutes     []TLSRoute `json:"tlsRoutes,omitempty"`
}
