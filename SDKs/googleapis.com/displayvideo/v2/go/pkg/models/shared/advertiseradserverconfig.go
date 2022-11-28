package shared

// AdvertiserAdServerConfig
// Ad server related settings of an advertiser.
type AdvertiserAdServerConfig struct {
	CmHybridConfig       *CmHybridConfig       `json:"cmHybridConfig,omitempty"`
	ThirdPartyOnlyConfig *ThirdPartyOnlyConfig `json:"thirdPartyOnlyConfig,omitempty"`
}
