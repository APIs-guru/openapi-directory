package shared

type ListMuteConfigsResponse struct {
	MuteConfigs   []GoogleCloudSecuritycenterV1MuteConfig `json:"muteConfigs,omitempty"`
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
}
