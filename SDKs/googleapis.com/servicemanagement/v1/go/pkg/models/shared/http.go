package shared



type HTTP struct {
    FullyDecodeReservedExpansion *bool `json:"fullyDecodeReservedExpansion,omitempty"`
    Rules []HTTPRule `json:"rules,omitempty"`
    
}

