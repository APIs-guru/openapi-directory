package shared

// GoogleChromePolicyVersionsV1PolicyValue
// A particular value for a policy managed by the service.
type GoogleChromePolicyVersionsV1PolicyValue struct {
	PolicySchema *string                `json:"policySchema,omitempty"`
	Value        map[string]interface{} `json:"value,omitempty"`
}
