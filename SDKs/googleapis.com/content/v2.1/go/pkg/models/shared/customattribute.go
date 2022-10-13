package shared

type CustomAttribute struct {
	GroupValues []CustomAttribute `json:"groupValues"`
	Name        *string           `json:"name"`
	Value       *string           `json:"value"`
}
