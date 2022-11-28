package shared

// PolicyTopicEntry
// Each policy topic entry will represent a violation of a policy topic for a creative, with the policy topic information and optional evidence for the policy violation.
type PolicyTopicEntry struct {
	Evidences     []PolicyTopicEvidence `json:"evidences,omitempty"`
	HelpCenterURL *string               `json:"helpCenterUrl,omitempty"`
	PolicyTopic   *string               `json:"policyTopic,omitempty"`
}
