package shared



type AdvertiserSdfConfig struct {
    OverridePartnerSdfConfig *bool `json:"overridePartnerSdfConfig,omitempty"`
    SdfConfig *SdfConfig `json:"sdfConfig,omitempty"`
    
}

