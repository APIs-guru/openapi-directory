package shared

import (
	"time"
)

type Gene struct {
	AgrDescription    *string
	Description       *string
	EnsemblFullName   *string
	EnsemblGeneSymbol *string
	EnsemblGeneType   *string
	GeneSource        *string
	Key               *int32
	MergedDescription *string
	Name              *string
	NcbiAnnotStatus   *string
	NomenReviewDate   *time.Time
	NomenSource       *string
	Notes             *string
	RefSeqStatus      *string
	RgdID             *int32
	SoAccID           *string
	SpeciesTypeKey    *int32
	Symbol            *string
	Type              *string
	Variant           *bool
}
