package shared

// ImageProviderInfo
// Class ImageProviderInfo.
type ImageProviderInfo struct {
	Name            *string         `json:"Name,omitempty"`
	SupportedImages []ImageTypeEnum `json:"SupportedImages,omitempty"`
}
