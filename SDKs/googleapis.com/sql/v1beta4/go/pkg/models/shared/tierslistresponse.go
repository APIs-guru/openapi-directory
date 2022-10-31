package shared



type TiersListResponse struct {
    Items []Tier `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

