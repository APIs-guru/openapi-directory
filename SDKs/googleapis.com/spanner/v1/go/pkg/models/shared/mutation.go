package shared

type Mutation struct {
	Delete         *Delete `json:"delete,omitempty"`
	Insert         *Write  `json:"insert,omitempty"`
	InsertOrUpdate *Write  `json:"insertOrUpdate,omitempty"`
	Replace        *Write  `json:"replace,omitempty"`
	Update         *Write  `json:"update,omitempty"`
}
