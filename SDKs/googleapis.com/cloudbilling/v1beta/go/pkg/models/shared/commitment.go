package shared

type Commitment struct {
	Name               *string             `json:"name,omitempty"`
	VMResourceBasedCud *VMResourceBasedCud `json:"vmResourceBasedCud,omitempty"`
}
