package shared

type QueryProperties struct {
	ID       *string  `json:"id"`
	Name     *string  `json:"name"`
	Severity *string  `json:"severity"`
	Tags     []string `json:"tags"`
}
