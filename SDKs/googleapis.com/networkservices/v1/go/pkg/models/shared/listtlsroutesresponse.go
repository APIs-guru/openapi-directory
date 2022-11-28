package shared

// ListTLSRoutesResponse
// Response returned by the ListTlsRoutes method.
type ListTLSRoutesResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	TLSRoutes     []TLSRoute `json:"tlsRoutes,omitempty"`
}
