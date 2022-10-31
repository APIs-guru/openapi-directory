package shared



type UpdateItemRequest struct {
    Item *Item `json:"item,omitempty"`
    Location *Location `json:"location,omitempty"`
    UpdateMask *string `json:"updateMask,omitempty"`
    
}

