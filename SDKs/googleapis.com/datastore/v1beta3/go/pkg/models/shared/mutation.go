package shared

// Mutation
// A mutation to apply to an entity.
type Mutation struct {
	BaseVersion *string `json:"baseVersion,omitempty"`
	Delete      *Key    `json:"delete,omitempty"`
	Insert      *Entity `json:"insert,omitempty"`
	Update      *Entity `json:"update,omitempty"`
	UpdateTime  *string `json:"updateTime,omitempty"`
	Upsert      *Entity `json:"upsert,omitempty"`
}
