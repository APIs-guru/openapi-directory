package shared

// ListServiceBindingsResponse
// Response returned by the ListServiceBindings method.
type ListServiceBindingsResponse struct {
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	ServiceBindings []ServiceBinding `json:"serviceBindings,omitempty"`
}
