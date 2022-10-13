package shared

type ParallelInstruction struct {
	Flatten           *FlattenInstruction           `json:"flatten"`
	Name              *string                       `json:"name"`
	OriginalName      *string                       `json:"originalName"`
	Outputs           []InstructionOutput           `json:"outputs"`
	ParDo             *ParDoInstruction             `json:"parDo"`
	PartialGroupByKey *PartialGroupByKeyInstruction `json:"partialGroupByKey"`
	Read              *ReadInstruction              `json:"read"`
	SystemName        *string                       `json:"systemName"`
	Write             *WriteInstruction             `json:"write"`
}
