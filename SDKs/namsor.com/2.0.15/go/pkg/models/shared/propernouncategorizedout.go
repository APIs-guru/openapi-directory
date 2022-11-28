package shared

// ProperNounCategorizedOut
// Classified typed proper names
type ProperNounCategorizedOut struct {
	CommonType    *string  `json:"commonType,omitempty"`
	CommonTypeAlt *string  `json:"commonTypeAlt,omitempty"`
	ID            *string  `json:"id,omitempty"`
	Name          *string  `json:"name,omitempty"`
	Score         *float64 `json:"score,omitempty"`
	Script        *string  `json:"script,omitempty"`
}
