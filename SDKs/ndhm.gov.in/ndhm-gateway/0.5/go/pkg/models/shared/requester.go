package shared



type RequesterIdentifier struct {
    System *string `json:"system,omitempty"`
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type Requester struct {
    Identifier *RequesterIdentifier `json:"identifier,omitempty"`
    Name string `json:"name"`
    
}

