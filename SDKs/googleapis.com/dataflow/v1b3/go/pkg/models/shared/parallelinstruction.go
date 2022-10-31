package shared



type ParallelInstruction struct {
    Flatten *FlattenInstruction `json:"flatten,omitempty"`
    Name *string `json:"name,omitempty"`
    OriginalName *string `json:"originalName,omitempty"`
    Outputs []InstructionOutput `json:"outputs,omitempty"`
    ParDo *ParDoInstruction `json:"parDo,omitempty"`
    PartialGroupByKey *PartialGroupByKeyInstruction `json:"partialGroupByKey,omitempty"`
    Read *ReadInstruction `json:"read,omitempty"`
    SystemName *string `json:"systemName,omitempty"`
    Write *WriteInstruction `json:"write,omitempty"`
    
}

