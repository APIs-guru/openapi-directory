package shared

type ListInstanceConfigsResponse struct {
	InstanceConfigs []InstanceConfig `json:"instanceConfigs"`
	NextPageToken   *string          `json:"nextPageToken"`
}
