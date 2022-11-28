package shared

// ConfigurationPageInfo
// The configuration page info.
type ConfigurationPageInfo struct {
	ConfigurationPageType *ConfigurationPageTypeEnum `json:"ConfigurationPageType,omitempty"`
	DisplayName           *string                    `json:"DisplayName,omitempty"`
	EnableInMainMenu      *bool                      `json:"EnableInMainMenu,omitempty"`
	MenuIcon              *string                    `json:"MenuIcon,omitempty"`
	MenuSection           *string                    `json:"MenuSection,omitempty"`
	Name                  *string                    `json:"Name,omitempty"`
	PluginID              *string                    `json:"PluginId,omitempty"`
}
