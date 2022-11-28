package shared

// AdvertiserSdfConfig
// Structured Data Files (SDF) settings of an advertiser.
type AdvertiserSdfConfig struct {
	OverridePartnerSdfConfig *bool      `json:"overridePartnerSdfConfig,omitempty"`
	SdfConfig                *SdfConfig `json:"sdfConfig,omitempty"`
}
