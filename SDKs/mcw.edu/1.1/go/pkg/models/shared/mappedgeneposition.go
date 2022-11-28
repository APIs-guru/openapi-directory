package shared

type MappedGenePosition struct {
	Chromosome *string
	MapKey     *int32
	RgdID      *int32
	Start      *int64
	Stop       *int64
	Strand     *string
	Symbol     *string
}
