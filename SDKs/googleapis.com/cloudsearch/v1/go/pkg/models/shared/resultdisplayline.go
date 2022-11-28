package shared

// ResultDisplayLine
// The collection of fields that make up a displayed line
type ResultDisplayLine struct {
	Fields []ResultDisplayField `json:"fields,omitempty"`
}
