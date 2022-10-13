package shared

type CustomAttribute struct {
	Filterable   *bool    `json:"filterable"`
	LongValues   []string `json:"longValues"`
	StringValues []string `json:"stringValues"`
}
