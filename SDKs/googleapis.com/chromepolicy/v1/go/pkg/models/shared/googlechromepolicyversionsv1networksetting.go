package shared

// GoogleChromePolicyVersionsV1NetworkSetting
// A network setting contains network configurations.
type GoogleChromePolicyVersionsV1NetworkSetting struct {
	PolicySchema *string                `json:"policySchema,omitempty"`
	Value        map[string]interface{} `json:"value,omitempty"`
}
