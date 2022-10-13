package shared

type CustomAttribute struct {
	Name  *string `json:"name"`
	Type  *string `json:"type"`
	Unit  *string `json:"unit"`
	Value *string `json:"value"`
}
