package shared



type WriteInstruction struct {
    Input *InstructionInput `json:"input,omitempty"`
    Sink *Sink `json:"sink,omitempty"`
    
}

