package shared

type MappedGene struct {
	Chromosome *string
	Gene       *Gene
	MapKey     *int32
	Start      *int64
	Stop       *int64
	Strand     *string
}
