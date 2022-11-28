package shared

type MappedQtl struct {
	Chromosome *string
	MapKey     *int32
	Qtl        *Qtl
	Start      *int64
	Stop       *int64
	Strand     *string
}
