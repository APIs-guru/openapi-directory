package shared



type ProcessSignature struct {
    MemoryHashSignature *MemoryHashSignature `json:"memoryHashSignature,omitempty"`
    YaraRuleSignature *YaraRuleSignature `json:"yaraRuleSignature,omitempty"`
    
}

