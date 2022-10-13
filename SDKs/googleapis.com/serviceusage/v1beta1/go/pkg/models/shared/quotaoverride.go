package shared

type QuotaOverride struct {
	AdminOverrideAncestor *string           `json:"adminOverrideAncestor"`
	Dimensions            map[string]string `json:"dimensions"`
	Metric                *string           `json:"metric"`
	Name                  *string           `json:"name"`
	OverrideValue         *string           `json:"overrideValue"`
	Unit                  *string           `json:"unit"`
}
