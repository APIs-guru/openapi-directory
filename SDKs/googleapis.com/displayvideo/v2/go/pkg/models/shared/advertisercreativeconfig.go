package shared

// AdvertiserCreativeConfig
// Creatives related settings of an advertiser.
type AdvertiserCreativeConfig struct {
	DynamicCreativeEnabled             *bool   `json:"dynamicCreativeEnabled,omitempty"`
	IasClientID                        *string `json:"iasClientId,omitempty"`
	ObaComplianceDisabled              *bool   `json:"obaComplianceDisabled,omitempty"`
	VideoCreativeDataSharingAuthorized *bool   `json:"videoCreativeDataSharingAuthorized,omitempty"`
}
