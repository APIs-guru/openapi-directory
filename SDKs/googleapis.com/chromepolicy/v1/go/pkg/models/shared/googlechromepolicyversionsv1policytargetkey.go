package shared

// GoogleChromePolicyVersionsV1PolicyTargetKey
// The key used to identify the target on which the policy will be applied.
type GoogleChromePolicyVersionsV1PolicyTargetKey struct {
	AdditionalTargetKeys map[string]string `json:"additionalTargetKeys,omitempty"`
	TargetResource       *string           `json:"targetResource,omitempty"`
}
