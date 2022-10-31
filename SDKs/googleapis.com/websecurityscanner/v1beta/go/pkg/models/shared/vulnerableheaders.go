package shared



type VulnerableHeaders struct {
    Headers []Header `json:"headers,omitempty"`
    MissingHeaders []Header `json:"missingHeaders,omitempty"`
    
}

