package shared

type PolicyTopicEntry struct {
	Evidences     []PolicyTopicEvidence `json:"evidences"`
	HelpCenterURL *string               `json:"helpCenterUrl"`
	PolicyTopic   *string               `json:"policyTopic"`
}
