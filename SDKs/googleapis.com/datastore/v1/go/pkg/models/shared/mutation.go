package shared

type Mutation struct {
	BaseVersion *string `json:"baseVersion"`
	Delete      *Key    `json:"delete"`
	Insert      *Entity `json:"insert"`
	Update      *Entity `json:"update"`
	UpdateTime  *string `json:"updateTime"`
	Upsert      *Entity `json:"upsert"`
}
