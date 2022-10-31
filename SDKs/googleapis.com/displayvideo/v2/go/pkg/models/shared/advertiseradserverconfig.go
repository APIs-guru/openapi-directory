package shared



type AdvertiserAdServerConfig struct {
    CmHybridConfig *CmHybridConfig `json:"cmHybridConfig,omitempty"`
    ThirdPartyOnlyConfig *ThirdPartyOnlyConfig `json:"thirdPartyOnlyConfig,omitempty"`
    
}

