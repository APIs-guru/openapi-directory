package shared



type ComputationTopology struct {
    ComputationID *string `json:"computationId,omitempty"`
    Inputs []StreamLocation `json:"inputs,omitempty"`
    KeyRanges []KeyRangeLocation `json:"keyRanges,omitempty"`
    Outputs []StreamLocation `json:"outputs,omitempty"`
    StateFamilies []StateFamilyConfig `json:"stateFamilies,omitempty"`
    SystemStageName *string `json:"systemStageName,omitempty"`
    
}

