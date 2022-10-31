package shared



type Item struct {
    ItemID *string `json:"itemId,omitempty"`
    Labels []Label `json:"labels,omitempty"`
    Price *Money `json:"price,omitempty"`
    
}

