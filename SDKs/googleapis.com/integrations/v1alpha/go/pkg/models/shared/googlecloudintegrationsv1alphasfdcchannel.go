package shared

type GoogleCloudIntegrationsV1alphaSfdcChannel struct {
	ChannelTopic *string `json:"channelTopic,omitempty"`
	CreateTime   *string `json:"createTime,omitempty"`
	DeleteTime   *string `json:"deleteTime,omitempty"`
	Description  *string `json:"description,omitempty"`
	DisplayName  *string `json:"displayName,omitempty"`
	IsActive     *bool   `json:"isActive,omitempty"`
	LastReplayID *string `json:"lastReplayId,omitempty"`
	Name         *string `json:"name,omitempty"`
	UpdateTime   *string `json:"updateTime,omitempty"`
}
