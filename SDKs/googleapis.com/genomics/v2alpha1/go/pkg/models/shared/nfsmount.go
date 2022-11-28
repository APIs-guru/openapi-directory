package shared

// NfsMount
// Configuration for an `NFSMount` to be attached to the VM.
type NfsMount struct {
	Target *string `json:"target,omitempty"`
}
