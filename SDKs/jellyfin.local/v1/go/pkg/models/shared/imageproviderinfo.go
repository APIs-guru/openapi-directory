package shared



type ImageProviderInfo struct {
    Name *string `json:"Name,omitempty"`
    SupportedImages []ImageTypeEnum `json:"SupportedImages,omitempty"`
    
}

