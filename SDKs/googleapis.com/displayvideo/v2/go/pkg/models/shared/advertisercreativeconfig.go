package shared

type AdvertiserCreativeConfig struct {
	DynamicCreativeEnabled             *bool   `json:"dynamicCreativeEnabled"`
	IasClientID                        *string `json:"iasClientId"`
	ObaComplianceDisabled              *bool   `json:"obaComplianceDisabled"`
	VideoCreativeDataSharingAuthorized *bool   `json:"videoCreativeDataSharingAuthorized"`
}
