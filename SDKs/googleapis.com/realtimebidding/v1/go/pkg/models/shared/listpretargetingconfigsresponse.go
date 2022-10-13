package shared

type ListPretargetingConfigsResponse struct {
	NextPageToken       *string              `json:"nextPageToken"`
	PretargetingConfigs []PretargetingConfig `json:"pretargetingConfigs"`
}
