package shared

type PolicyTopicEntry struct {
	Evidences     []PolicyTopicEvidence `json:"evidences,omitempty"`
	HelpCenterURL *string               `json:"helpCenterUrl,omitempty"`
	PolicyTopic   *string               `json:"policyTopic,omitempty"`
}
