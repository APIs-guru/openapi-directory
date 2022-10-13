package shared

type ImageProviderInfo struct {
	Name            *string         `json:"Name"`
	SupportedImages []ImageTypeEnum `json:"SupportedImages"`
}
