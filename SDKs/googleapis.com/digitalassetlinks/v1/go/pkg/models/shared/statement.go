package shared

type Statement struct {
	Relation *string `json:"relation"`
	Source   *Asset  `json:"source"`
	Target   *Asset  `json:"target"`
}
