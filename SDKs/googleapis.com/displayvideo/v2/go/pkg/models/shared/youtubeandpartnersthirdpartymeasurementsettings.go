package shared

type YoutubeAndPartnersThirdPartyMeasurementSettings struct {
	BrandLiftVendorConfigs   []ThirdPartyVendorConfig `json:"brandLiftVendorConfigs"`
	BrandSafetyVendorConfigs []ThirdPartyVendorConfig `json:"brandSafetyVendorConfigs"`
	ReachVendorConfigs       []ThirdPartyVendorConfig `json:"reachVendorConfigs"`
	ViewabilityVendorConfigs []ThirdPartyVendorConfig `json:"viewabilityVendorConfigs"`
}
