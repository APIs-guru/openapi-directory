package shared

// ListServiceConfigsResponse
// Response message for ListServiceConfigs method.
type ListServiceConfigsResponse struct {
	NextPageToken  *string   `json:"nextPageToken,omitempty"`
	ServiceConfigs []Service `json:"serviceConfigs,omitempty"`
}
