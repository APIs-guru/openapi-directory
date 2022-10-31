package shared



type PersonalNameParsedOut struct {
    FirstLastName *FirstLastNameOut `json:"firstLastName,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    NameParserType *string `json:"nameParserType,omitempty"`
    NameParserTypeAlt *string `json:"nameParserTypeAlt,omitempty"`
    Score *float64 `json:"score,omitempty"`
    Script *string `json:"script,omitempty"`
    
}

