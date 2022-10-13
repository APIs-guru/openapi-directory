package shared

type AnalyzeSyntaxResponse struct {
	Language  *string    `json:"language"`
	Sentences []Sentence `json:"sentences"`
	Tokens    []Token    `json:"tokens"`
}
