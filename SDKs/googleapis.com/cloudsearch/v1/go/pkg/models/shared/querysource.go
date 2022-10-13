package shared

type QuerySource struct {
	DisplayName *string         `json:"displayName"`
	Operators   []QueryOperator `json:"operators"`
	ShortName   *string         `json:"shortName"`
	Source      *Source         `json:"source"`
}
