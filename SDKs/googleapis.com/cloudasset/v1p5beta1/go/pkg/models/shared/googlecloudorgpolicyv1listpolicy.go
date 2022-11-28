package shared

type GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum string

const (
	GoogleCloudOrgpolicyV1ListPolicyAllValuesEnumAllValuesUnspecified GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum = "ALL_VALUES_UNSPECIFIED"
	GoogleCloudOrgpolicyV1ListPolicyAllValuesEnumAllow                GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum = "ALLOW"
	GoogleCloudOrgpolicyV1ListPolicyAllValuesEnumDeny                 GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum = "DENY"
)

// GoogleCloudOrgpolicyV1ListPolicy
// Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset.
type GoogleCloudOrgpolicyV1ListPolicy struct {
	AllValues         *GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum `json:"allValues,omitempty"`
	AllowedValues     []string                                       `json:"allowedValues,omitempty"`
	DeniedValues      []string                                       `json:"deniedValues,omitempty"`
	InheritFromParent *bool                                          `json:"inheritFromParent,omitempty"`
	SuggestedValue    *string                                        `json:"suggestedValue,omitempty"`
}
