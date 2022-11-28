package shared

// AdvertiserDataAccessConfig
// Settings that control how advertiser related data may be accessed.
type AdvertiserDataAccessConfig struct {
	SdfConfig *AdvertiserSdfConfig `json:"sdfConfig,omitempty"`
}
