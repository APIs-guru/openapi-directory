package shared



type QuerySource struct {
    DisplayName *string `json:"displayName,omitempty"`
    Operators []QueryOperator `json:"operators,omitempty"`
    ShortName *string `json:"shortName,omitempty"`
    Source *Source `json:"source,omitempty"`
    
}

