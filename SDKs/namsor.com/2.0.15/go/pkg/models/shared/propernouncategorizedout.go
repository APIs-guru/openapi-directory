package shared

type ProperNounCategorizedOut struct {
	CommonType    *string  `json:"commonType"`
	CommonTypeAlt *string  `json:"commonTypeAlt"`
	ID            *string  `json:"id"`
	Name          *string  `json:"name"`
	Score         *float64 `json:"score"`
	Script        *string  `json:"script"`
}
