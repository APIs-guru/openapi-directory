package shared

// ProcessSignature
// Indicates what signature matched this process.
type ProcessSignature struct {
	MemoryHashSignature *MemoryHashSignature `json:"memoryHashSignature,omitempty"`
	YaraRuleSignature   *YaraRuleSignature   `json:"yaraRuleSignature,omitempty"`
}
