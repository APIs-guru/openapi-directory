package shared

type QuotaOverride struct {
	AdminOverrideAncestor *string           `json:"adminOverrideAncestor,omitempty"`
	Dimensions            map[string]string `json:"dimensions,omitempty"`
	Metric                *string           `json:"metric,omitempty"`
	Name                  *string           `json:"name,omitempty"`
	OverrideValue         *string           `json:"overrideValue,omitempty"`
	Unit                  *string           `json:"unit,omitempty"`
}
