package shared



type IosInfo struct {
    IosAppStoreID *string `json:"iosAppStoreId,omitempty"`
    IosBundleID *string `json:"iosBundleId,omitempty"`
    IosCustomScheme *string `json:"iosCustomScheme,omitempty"`
    IosFallbackLink *string `json:"iosFallbackLink,omitempty"`
    IosIpadBundleID *string `json:"iosIpadBundleId,omitempty"`
    IosIpadFallbackLink *string `json:"iosIpadFallbackLink,omitempty"`
    IosMinimumVersion *string `json:"iosMinimumVersion,omitempty"`
    
}

