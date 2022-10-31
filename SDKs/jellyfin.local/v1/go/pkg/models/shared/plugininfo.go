package shared



type PluginInfo struct {
    CanUninstall *bool `json:"CanUninstall,omitempty"`
    ConfigurationFileName *string `json:"ConfigurationFileName,omitempty"`
    Description *string `json:"Description,omitempty"`
    HasImage *bool `json:"HasImage,omitempty"`
    ID *string `json:"Id,omitempty"`
    Name *string `json:"Name,omitempty"`
    Status *PluginStatusEnum `json:"Status,omitempty"`
    Version *Version `json:"Version,omitempty"`
    
}

