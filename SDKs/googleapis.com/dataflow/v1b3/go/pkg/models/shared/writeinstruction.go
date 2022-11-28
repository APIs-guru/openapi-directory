package shared

// WriteInstruction
// An instruction that writes records. Takes one input, produces no outputs.
type WriteInstruction struct {
	Input *InstructionInput `json:"input,omitempty"`
	Sink  *Sink             `json:"sink,omitempty"`
}
