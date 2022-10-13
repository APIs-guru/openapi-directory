package shared

type ConfigurationPageInfo struct {
	ConfigurationPageType *ConfigurationPageTypeEnum `json:"ConfigurationPageType"`
	DisplayName           *string                    `json:"DisplayName"`
	EnableInMainMenu      *bool                      `json:"EnableInMainMenu"`
	MenuIcon              *string                    `json:"MenuIcon"`
	MenuSection           *string                    `json:"MenuSection"`
	Name                  *string                    `json:"Name"`
	PluginID              *string                    `json:"PluginId"`
}
