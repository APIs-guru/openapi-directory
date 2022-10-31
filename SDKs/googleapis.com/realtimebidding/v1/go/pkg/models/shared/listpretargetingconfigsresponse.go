package shared

type ListPretargetingConfigsResponse struct {
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
	PretargetingConfigs []PretargetingConfig `json:"pretargetingConfigs,omitempty"`
}
