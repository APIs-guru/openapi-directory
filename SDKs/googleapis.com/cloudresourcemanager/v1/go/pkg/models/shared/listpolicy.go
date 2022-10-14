package shared

type ListPolicyAllValuesEnum string

const (
	ListPolicyAllValuesEnumAllValuesUnspecified ListPolicyAllValuesEnum = "ALL_VALUES_UNSPECIFIED"
	ListPolicyAllValuesEnumAllow                ListPolicyAllValuesEnum = "ALLOW"
	ListPolicyAllValuesEnumDeny                 ListPolicyAllValuesEnum = "DENY"
)

type ListPolicy struct {
	AllValues         *ListPolicyAllValuesEnum `json:"allValues,omitempty"`
	AllowedValues     []string                 `json:"allowedValues,omitempty"`
	DeniedValues      []string                 `json:"deniedValues,omitempty"`
	InheritFromParent *bool                    `json:"inheritFromParent,omitempty"`
	SuggestedValue    *string                  `json:"suggestedValue,omitempty"`
}
