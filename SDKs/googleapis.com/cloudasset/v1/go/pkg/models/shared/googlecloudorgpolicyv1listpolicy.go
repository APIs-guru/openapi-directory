package shared

type GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum string

const (
	GoogleCloudOrgpolicyV1ListPolicyAllValuesEnumAllValuesUnspecified GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum = "ALL_VALUES_UNSPECIFIED"
	GoogleCloudOrgpolicyV1ListPolicyAllValuesEnumAllow                GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum = "ALLOW"
	GoogleCloudOrgpolicyV1ListPolicyAllValuesEnumDeny                 GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum = "DENY"
)

type GoogleCloudOrgpolicyV1ListPolicy struct {
	AllValues         *GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum `json:"allValues"`
	AllowedValues     []string                                       `json:"allowedValues"`
	DeniedValues      []string                                       `json:"deniedValues"`
	InheritFromParent *bool                                          `json:"inheritFromParent"`
	SuggestedValue    *string                                        `json:"suggestedValue"`
}
