package shared

type ListPolicyAllValuesEnum string

const (
	ListPolicyAllValuesEnumAllValuesUnspecified ListPolicyAllValuesEnum = "ALL_VALUES_UNSPECIFIED"
	ListPolicyAllValuesEnumAllow                ListPolicyAllValuesEnum = "ALLOW"
	ListPolicyAllValuesEnumDeny                 ListPolicyAllValuesEnum = "DENY"
)

type ListPolicy struct {
	AllValues         *ListPolicyAllValuesEnum `json:"allValues"`
	AllowedValues     []string                 `json:"allowedValues"`
	DeniedValues      []string                 `json:"deniedValues"`
	InheritFromParent *bool                    `json:"inheritFromParent"`
	SuggestedValue    *string                  `json:"suggestedValue"`
}
