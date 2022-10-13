package shared

type ProcessSignature struct {
	MemoryHashSignature *MemoryHashSignature `json:"memoryHashSignature"`
	YaraRuleSignature   *YaraRuleSignature   `json:"yaraRuleSignature"`
}
