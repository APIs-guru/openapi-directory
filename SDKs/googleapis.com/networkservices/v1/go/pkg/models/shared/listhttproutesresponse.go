package shared



type ListHTTPRoutesResponse struct {
    HTTPRoutes []HTTPRoute `json:"httpRoutes,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

