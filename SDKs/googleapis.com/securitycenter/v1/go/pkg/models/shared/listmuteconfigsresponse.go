package shared

type ListMuteConfigsResponse struct {
	MuteConfigs   []GoogleCloudSecuritycenterV1MuteConfig `json:"muteConfigs"`
	NextPageToken *string                                 `json:"nextPageToken"`
}
