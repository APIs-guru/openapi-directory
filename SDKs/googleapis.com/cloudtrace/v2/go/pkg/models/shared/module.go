package shared

// Module
// Binary module.
type Module struct {
	BuildID *TruncatableString `json:"buildId,omitempty"`
	Module  *TruncatableString `json:"module,omitempty"`
}
