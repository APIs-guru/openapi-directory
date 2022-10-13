package shared

type ResultDisplayField struct {
	Label        *string        `json:"label"`
	OperatorName *string        `json:"operatorName"`
	Property     *NamedProperty `json:"property"`
}
