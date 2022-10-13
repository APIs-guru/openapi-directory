package shared

type GoogleChromePolicyV1PolicyValue struct {
	PolicySchema *string                `json:"policySchema"`
	Value        map[string]interface{} `json:"value"`
}
