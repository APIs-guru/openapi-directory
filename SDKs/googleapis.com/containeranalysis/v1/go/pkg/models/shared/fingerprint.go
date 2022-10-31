package shared



type Fingerprint struct {
    V1Name *string `json:"v1Name,omitempty"`
    V2Blob []string `json:"v2Blob,omitempty"`
    V2Name *string `json:"v2Name,omitempty"`
    
}

