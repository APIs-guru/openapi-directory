package shared



type RequesterIdentifier struct {
    System *string `json:"system,omitempty"`
    Type string `json:"type"`
    Value string `json:"value"`
    
}

type Requester struct {
    Identifier *RequesterIdentifier `json:"identifier,omitempty"`
    Name string `json:"name"`
    
}

