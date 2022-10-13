package shared

type Rule struct {
	AssetID             *string `json:"assetId"`
	Name                *string `json:"name"`
	TargetingTemplateID *string `json:"targetingTemplateId"`
}
