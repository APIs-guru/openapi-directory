package shared

type ShortRepresentation struct {
	Description *string          `json:"description"`
	Subqueries  map[string]int32 `json:"subqueries"`
}
