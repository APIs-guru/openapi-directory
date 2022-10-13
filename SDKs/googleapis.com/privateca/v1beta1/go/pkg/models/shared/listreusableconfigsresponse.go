package shared

type ListReusableConfigsResponse struct {
	NextPageToken   *string          `json:"nextPageToken"`
	ReusableConfigs []ReusableConfig `json:"reusableConfigs"`
	Unreachable     []string         `json:"unreachable"`
}
