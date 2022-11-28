package shared

// ReadInstruction
// An instruction that reads records. Takes no inputs, produces one output.
type ReadInstruction struct {
	Source *Source `json:"source,omitempty"`
}
