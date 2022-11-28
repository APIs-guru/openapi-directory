package shared

// ListMuteConfigsResponse
// Response message for listing mute configs.
type ListMuteConfigsResponse struct {
	MuteConfigs   []GoogleCloudSecuritycenterV1MuteConfig `json:"muteConfigs,omitempty"`
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
}
