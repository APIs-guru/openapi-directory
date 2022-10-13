package shared

type ClientCapabilitiesDto struct {
	AppStoreURL                  *string                  `json:"AppStoreUrl"`
	DeviceProfile                *DeviceProfile           `json:"DeviceProfile"`
	IconURL                      *string                  `json:"IconUrl"`
	MessageCallbackURL           *string                  `json:"MessageCallbackUrl"`
	PlayableMediaTypes           []string                 `json:"PlayableMediaTypes"`
	SupportedCommands            []GeneralCommandTypeEnum `json:"SupportedCommands"`
	SupportsContentUploading     *bool                    `json:"SupportsContentUploading"`
	SupportsMediaControl         *bool                    `json:"SupportsMediaControl"`
	SupportsPersistentIdentifier *bool                    `json:"SupportsPersistentIdentifier"`
	SupportsSync                 *bool                    `json:"SupportsSync"`
}
