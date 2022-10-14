package shared

type GoogleChromePolicyV1NetworkSetting struct {
	PolicySchema *string                `json:"policySchema,omitempty"`
	Value        map[string]interface{} `json:"value,omitempty"`
}
