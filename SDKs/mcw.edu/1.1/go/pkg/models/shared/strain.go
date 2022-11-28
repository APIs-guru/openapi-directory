package shared

type Strain struct {
	BackgroundStrainRgdID *int32
	ChrAltered            *string
	Color                 *string
	GeneticStatus         *string
	Genetics              *string
	ImageURL              *string
	InbredGen             *string
	Key                   *int32
	LastStatus            *string
	LastStatusObject      *Status
	ModificationMethod    *string
	Name                  *string
	Notes                 *string
	Origin                *string
	ResearchUse           *string
	RgdID                 *int32
	Source                *string
	SpeciesTypeKey        *int32
	StatusLog             []Status
	Strain                *string
	StrainTypeName        *string
	Substrain             *string
	Symbol                *string
}
