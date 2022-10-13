package shared

type Mutation struct {
	Delete         *Delete `json:"delete"`
	Insert         *Write  `json:"insert"`
	InsertOrUpdate *Write  `json:"insertOrUpdate"`
	Replace        *Write  `json:"replace"`
	Update         *Write  `json:"update"`
}
