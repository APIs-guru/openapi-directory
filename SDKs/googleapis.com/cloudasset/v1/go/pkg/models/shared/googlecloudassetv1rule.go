package shared

// GoogleCloudAssetV1Rule
// Represents a rule defined in an organization policy
type GoogleCloudAssetV1Rule struct {
	AllowAll  *bool                           `json:"allowAll,omitempty"`
	Condition *Expr                           `json:"condition,omitempty"`
	DenyAll   *bool                           `json:"denyAll,omitempty"`
	Enforce   *bool                           `json:"enforce,omitempty"`
	Values    *GoogleCloudAssetV1StringValues `json:"values,omitempty"`
}
