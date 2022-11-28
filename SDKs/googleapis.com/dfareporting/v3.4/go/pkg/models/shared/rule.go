package shared

// Rule
// A rule associates an asset with a targeting template for asset-level targeting. Applicable to INSTREAM_VIDEO creatives.
type Rule struct {
	AssetID             *string `json:"assetId,omitempty"`
	Name                *string `json:"name,omitempty"`
	TargetingTemplateID *string `json:"targetingTemplateId,omitempty"`
}
