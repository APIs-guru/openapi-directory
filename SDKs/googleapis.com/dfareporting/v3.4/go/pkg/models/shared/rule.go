package shared

type Rule struct {
	AssetID             *string `json:"assetId,omitempty"`
	Name                *string `json:"name,omitempty"`
	TargetingTemplateID *string `json:"targetingTemplateId,omitempty"`
}
