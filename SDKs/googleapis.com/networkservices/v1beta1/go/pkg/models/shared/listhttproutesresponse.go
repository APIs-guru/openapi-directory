package shared

type ListHTTPRoutesResponse struct {
	HTTPRoutes    []HTTPRoute `json:"httpRoutes"`
	NextPageToken *string     `json:"nextPageToken"`
}
