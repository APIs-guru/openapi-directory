package shared

type IosInfo struct {
	IosAppStoreID       *string `json:"iosAppStoreId"`
	IosBundleID         *string `json:"iosBundleId"`
	IosCustomScheme     *string `json:"iosCustomScheme"`
	IosFallbackLink     *string `json:"iosFallbackLink"`
	IosIpadBundleID     *string `json:"iosIpadBundleId"`
	IosIpadFallbackLink *string `json:"iosIpadFallbackLink"`
	IosMinimumVersion   *string `json:"iosMinimumVersion"`
}
