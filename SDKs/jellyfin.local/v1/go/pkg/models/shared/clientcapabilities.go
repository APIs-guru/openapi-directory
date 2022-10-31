package shared



type ClientCapabilities struct {
    AppStoreURL *string `json:"AppStoreUrl,omitempty"`
    DeviceProfile *DeviceProfile `json:"DeviceProfile,omitempty"`
    IconURL *string `json:"IconUrl,omitempty"`
    MessageCallbackURL *string `json:"MessageCallbackUrl,omitempty"`
    PlayableMediaTypes []string `json:"PlayableMediaTypes,omitempty"`
    SupportedCommands []GeneralCommandTypeEnum `json:"SupportedCommands,omitempty"`
    SupportsContentUploading *bool `json:"SupportsContentUploading,omitempty"`
    SupportsMediaControl *bool `json:"SupportsMediaControl,omitempty"`
    SupportsPersistentIdentifier *bool `json:"SupportsPersistentIdentifier,omitempty"`
    SupportsSync *bool `json:"SupportsSync,omitempty"`
    
}

