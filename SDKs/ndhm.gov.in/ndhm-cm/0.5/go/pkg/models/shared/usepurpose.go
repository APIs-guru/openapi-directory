package shared



type UsePurpose struct {
    Code string `json:"code"`
    RefURI *string `json:"refUri,omitempty"`
    Text string `json:"text"`
    
}

