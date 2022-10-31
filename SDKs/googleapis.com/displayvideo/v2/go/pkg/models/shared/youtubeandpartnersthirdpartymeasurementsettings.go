package shared



type YoutubeAndPartnersThirdPartyMeasurementSettings struct {
    BrandLiftVendorConfigs []ThirdPartyVendorConfig `json:"brandLiftVendorConfigs,omitempty"`
    BrandSafetyVendorConfigs []ThirdPartyVendorConfig `json:"brandSafetyVendorConfigs,omitempty"`
    ReachVendorConfigs []ThirdPartyVendorConfig `json:"reachVendorConfigs,omitempty"`
    ViewabilityVendorConfigs []ThirdPartyVendorConfig `json:"viewabilityVendorConfigs,omitempty"`
    
}

