package shared

type StatementTemplate struct {
	Relation *string `json:"relation"`
	Source   *Asset  `json:"source"`
	Target   *Asset  `json:"target"`
}
