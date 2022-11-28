package shared

// CreativeAssetSelection
// Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives.
type CreativeAssetSelection struct {
	DefaultAssetID *string `json:"defaultAssetId,omitempty"`
	Rules          []Rule  `json:"rules,omitempty"`
}
