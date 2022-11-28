package shared

// ListPretargetingConfigsResponse
// A response containing pretargeting configurations.
type ListPretargetingConfigsResponse struct {
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
	PretargetingConfigs []PretargetingConfig `json:"pretargetingConfigs,omitempty"`
}
