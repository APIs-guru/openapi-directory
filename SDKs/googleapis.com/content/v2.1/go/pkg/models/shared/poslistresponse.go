package shared



type PosListResponse struct {
    Kind *string `json:"kind,omitempty"`
    Resources []PosStore `json:"resources,omitempty"`
    
}

