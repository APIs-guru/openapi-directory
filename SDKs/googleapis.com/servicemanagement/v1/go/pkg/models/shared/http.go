package shared

// HTTP
// Defines the HTTP configuration for an API service. It contains a list of HttpRule, each specifying the mapping of an RPC method to one or more HTTP REST API methods.
type HTTP struct {
	FullyDecodeReservedExpansion *bool      `json:"fullyDecodeReservedExpansion,omitempty"`
	Rules                        []HTTPRule `json:"rules,omitempty"`
}
