package shared



type MoveItemRequest struct {
    NewLocation *Location `json:"newLocation,omitempty"`
    OriginalLocation *Location `json:"originalLocation,omitempty"`
    
}

