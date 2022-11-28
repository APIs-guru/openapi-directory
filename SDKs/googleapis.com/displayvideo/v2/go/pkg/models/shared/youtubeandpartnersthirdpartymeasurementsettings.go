package shared

// YoutubeAndPartnersThirdPartyMeasurementSettings
// Settings that control what third-party vendors are measuring specific line item metrics.
type YoutubeAndPartnersThirdPartyMeasurementSettings struct {
	BrandLiftVendorConfigs   []ThirdPartyVendorConfig `json:"brandLiftVendorConfigs,omitempty"`
	BrandSafetyVendorConfigs []ThirdPartyVendorConfig `json:"brandSafetyVendorConfigs,omitempty"`
	ReachVendorConfigs       []ThirdPartyVendorConfig `json:"reachVendorConfigs,omitempty"`
	ViewabilityVendorConfigs []ThirdPartyVendorConfig `json:"viewabilityVendorConfigs,omitempty"`
}
