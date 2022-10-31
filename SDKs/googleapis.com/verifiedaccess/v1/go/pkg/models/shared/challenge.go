package shared



type Challenge struct {
    AlternativeChallenge *SignedData `json:"alternativeChallenge,omitempty"`
    Challenge *SignedData `json:"challenge,omitempty"`
    
}

