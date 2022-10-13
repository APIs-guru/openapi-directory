package shared

type CreativeAssetSelection struct {
	DefaultAssetID *string `json:"defaultAssetId"`
	Rules          []Rule  `json:"rules"`
}
