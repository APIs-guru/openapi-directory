package shared

// GoogleChromePolicyVersionsV1ResolvedPolicy
// The resolved value of a policy for a given target.
type GoogleChromePolicyVersionsV1ResolvedPolicy struct {
	AddedSourceKey *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"addedSourceKey,omitempty"`
	SourceKey      *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"sourceKey,omitempty"`
	TargetKey      *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"targetKey,omitempty"`
	Value          *GoogleChromePolicyVersionsV1PolicyValue     `json:"value,omitempty"`
}
