package shared



type ElectionsQueryResponse struct {
    Elections []Election `json:"elections,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

