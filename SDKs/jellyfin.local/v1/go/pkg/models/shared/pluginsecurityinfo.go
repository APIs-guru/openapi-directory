package shared

type PluginSecurityInfo struct {
	IsMbSupporter *bool   `json:"IsMbSupporter,omitempty"`
	SupporterKey  *string `json:"SupporterKey,omitempty"`
}
