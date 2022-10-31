package shared




type GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum string

const (
    GoogleCloudOrgpolicyV1ListPolicyAllValuesEnumAllValuesUnspecified GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum = "ALL_VALUES_UNSPECIFIED"
GoogleCloudOrgpolicyV1ListPolicyAllValuesEnumAllow GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum = "ALLOW"
GoogleCloudOrgpolicyV1ListPolicyAllValuesEnumDeny GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum = "DENY"
)


type GoogleCloudOrgpolicyV1ListPolicy struct {
    AllValues *GoogleCloudOrgpolicyV1ListPolicyAllValuesEnum `json:"allValues,omitempty"`
    AllowedValues []string `json:"allowedValues,omitempty"`
    DeniedValues []string `json:"deniedValues,omitempty"`
    InheritFromParent *bool `json:"inheritFromParent,omitempty"`
    SuggestedValue *string `json:"suggestedValue,omitempty"`
    
}

