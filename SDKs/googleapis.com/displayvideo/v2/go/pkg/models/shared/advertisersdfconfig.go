package shared

type AdvertiserSdfConfig struct {
	OverridePartnerSdfConfig *bool      `json:"overridePartnerSdfConfig"`
	SdfConfig                *SdfConfig `json:"sdfConfig"`
}
