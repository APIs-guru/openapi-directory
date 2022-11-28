package shared

// Mutation
// A modification to one or more Cloud Spanner rows. Mutations can be applied to a Cloud Spanner database by sending them in a Commit call.
type Mutation struct {
	Delete         *Delete `json:"delete,omitempty"`
	Insert         *Write  `json:"insert,omitempty"`
	InsertOrUpdate *Write  `json:"insertOrUpdate,omitempty"`
	Replace        *Write  `json:"replace,omitempty"`
	Update         *Write  `json:"update,omitempty"`
}
