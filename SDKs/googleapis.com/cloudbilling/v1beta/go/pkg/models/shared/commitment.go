package shared

type Commitment struct {
	Name               *string             `json:"name"`
	VMResourceBasedCud *VMResourceBasedCud `json:"vmResourceBasedCud"`
}
