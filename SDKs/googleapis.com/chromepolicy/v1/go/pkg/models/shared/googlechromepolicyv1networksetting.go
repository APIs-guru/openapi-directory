package shared

type GoogleChromePolicyV1NetworkSetting struct {
	PolicySchema *string                `json:"policySchema"`
	Value        map[string]interface{} `json:"value"`
}
