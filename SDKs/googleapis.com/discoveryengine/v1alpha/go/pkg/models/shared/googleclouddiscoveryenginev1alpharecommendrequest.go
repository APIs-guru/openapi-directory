package shared

// GoogleCloudDiscoveryengineV1alphaRecommendRequest
// Request message for Recommend method.
type GoogleCloudDiscoveryengineV1alphaRecommendRequest struct {
	Filter       *string                                     `json:"filter,omitempty"`
	PageSize     *int32                                      `json:"pageSize,omitempty"`
	Params       map[string]interface{}                      `json:"params,omitempty"`
	UserEvent    *GoogleCloudDiscoveryengineV1alphaUserEvent `json:"userEvent,omitempty"`
	UserLabels   map[string]string                           `json:"userLabels,omitempty"`
	ValidateOnly *bool                                       `json:"validateOnly,omitempty"`
}
