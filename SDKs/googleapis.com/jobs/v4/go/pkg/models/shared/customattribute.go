package shared

type CustomAttribute struct {
	Filterable        *bool    `json:"filterable"`
	KeywordSearchable *bool    `json:"keywordSearchable"`
	LongValues        []string `json:"longValues"`
	StringValues      []string `json:"stringValues"`
}
