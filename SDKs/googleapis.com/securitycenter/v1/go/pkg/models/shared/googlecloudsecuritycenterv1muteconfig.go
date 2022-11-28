package shared

// GoogleCloudSecuritycenterV1MuteConfig
// A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
type GoogleCloudSecuritycenterV1MuteConfig struct {
	CreateTime       *string `json:"createTime,omitempty"`
	Description      *string `json:"description,omitempty"`
	DisplayName      *string `json:"displayName,omitempty"`
	Filter           *string `json:"filter,omitempty"`
	MostRecentEditor *string `json:"mostRecentEditor,omitempty"`
	Name             *string `json:"name,omitempty"`
	UpdateTime       *string `json:"updateTime,omitempty"`
}

// GoogleCloudSecuritycenterV1MuteConfigInput
// A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
type GoogleCloudSecuritycenterV1MuteConfigInput struct {
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Filter      *string `json:"filter,omitempty"`
	Name        *string `json:"name,omitempty"`
}
