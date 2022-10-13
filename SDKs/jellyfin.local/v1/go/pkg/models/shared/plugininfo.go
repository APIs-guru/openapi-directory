package shared

type PluginInfo struct {
	CanUninstall          *bool             `json:"CanUninstall"`
	ConfigurationFileName *string           `json:"ConfigurationFileName"`
	Description           *string           `json:"Description"`
	HasImage              *bool             `json:"HasImage"`
	ID                    *string           `json:"Id"`
	Name                  *string           `json:"Name"`
	Status                *PluginStatusEnum `json:"Status"`
	Version               *Version          `json:"Version"`
}
