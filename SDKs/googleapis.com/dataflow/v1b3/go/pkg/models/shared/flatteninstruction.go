package shared

// FlattenInstruction
// An instruction that copies its inputs (zero or more) to its (single) output.
type FlattenInstruction struct {
	Inputs []InstructionInput `json:"inputs,omitempty"`
}
