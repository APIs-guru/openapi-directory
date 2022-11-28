package shared

type Qtl struct {
	Chromosome             *string
	Flank1RgdID            *int32
	Flank2RgdID            *int32
	InheritanceType        *string
	Key                    *int32
	LinkageImage           *string
	Lod                    *float64
	LodImage               *string
	MostSignificantCmoTerm *string
	Name                   *string
	Notes                  *string
	PeakOffset             *int32
	PeakRgdID              *int32
	Pvalue                 *float64
	RgdID                  *int32
	SourceURL              *string
	SpeciesTypeKey         *int32
	Symbol                 *string
	Variance               *float64
}
