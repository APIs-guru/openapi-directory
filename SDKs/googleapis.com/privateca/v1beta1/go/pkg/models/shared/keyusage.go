package shared



type KeyUsage struct {
    BaseKeyUsage *KeyUsageOptions `json:"baseKeyUsage,omitempty"`
    ExtendedKeyUsage *ExtendedKeyUsageOptions `json:"extendedKeyUsage,omitempty"`
    UnknownExtendedKeyUsages []ObjectID `json:"unknownExtendedKeyUsages,omitempty"`
    
}

