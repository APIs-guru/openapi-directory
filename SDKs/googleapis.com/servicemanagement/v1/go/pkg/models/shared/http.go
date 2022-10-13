package shared

type HTTP struct {
	FullyDecodeReservedExpansion *bool      `json:"fullyDecodeReservedExpansion"`
	Rules                        []HTTPRule `json:"rules"`
}
