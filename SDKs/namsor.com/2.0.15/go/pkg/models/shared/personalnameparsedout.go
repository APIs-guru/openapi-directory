package shared

type PersonalNameParsedOut struct {
	FirstLastName     *FirstLastNameOut `json:"firstLastName"`
	ID                *string           `json:"id"`
	Name              *string           `json:"name"`
	NameParserType    *string           `json:"nameParserType"`
	NameParserTypeAlt *string           `json:"nameParserTypeAlt"`
	Score             *float64          `json:"score"`
	Script            *string           `json:"script"`
}
