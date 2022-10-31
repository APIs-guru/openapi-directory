package shared



type QueryResponse struct {
    Record *Record `json:"record,omitempty"`
    URLNormalizationDetails *URLNormalization `json:"urlNormalizationDetails,omitempty"`
    
}

