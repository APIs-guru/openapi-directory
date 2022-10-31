package shared



type JwtLocation struct {
    Cookie *string `json:"cookie,omitempty"`
    Header *string `json:"header,omitempty"`
    Query *string `json:"query,omitempty"`
    ValuePrefix *string `json:"valuePrefix,omitempty"`
    
}

