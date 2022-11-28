package shared

// DebugOptions
// Shared request debug options for all cloudsearch RPC methods.
type DebugOptions struct {
	EnableDebugging *bool `json:"enableDebugging,omitempty"`
}
