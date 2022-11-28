package shared

// YaraRuleSignature
// A signature corresponding to a YARA rule.
type YaraRuleSignature struct {
	YaraRule *string `json:"yaraRule,omitempty"`
}
