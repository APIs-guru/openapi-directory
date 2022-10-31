package shared



type CustomAttribute struct {
    Filterable *bool `json:"filterable,omitempty"`
    KeywordSearchable *bool `json:"keywordSearchable,omitempty"`
    LongValues []string `json:"longValues,omitempty"`
    StringValues []string `json:"stringValues,omitempty"`
    
}

