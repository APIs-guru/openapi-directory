package shared

type AdvertiserAdServerConfig struct {
	CmHybridConfig       *CmHybridConfig       `json:"cmHybridConfig"`
	ThirdPartyOnlyConfig *ThirdPartyOnlyConfig `json:"thirdPartyOnlyConfig"`
}
