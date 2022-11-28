package shared

// ListHTTPRoutesResponse
// Response returned by the ListHttpRoutes method.
type ListHTTPRoutesResponse struct {
	HTTPRoutes    []HTTPRoute `json:"httpRoutes,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
