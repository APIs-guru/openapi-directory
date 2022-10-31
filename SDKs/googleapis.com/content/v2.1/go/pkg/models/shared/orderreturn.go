package shared



type OrderReturn struct {
    Actor *string `json:"actor,omitempty"`
    CreationDate *string `json:"creationDate,omitempty"`
    Quantity *int64 `json:"quantity,omitempty"`
    Reason *string `json:"reason,omitempty"`
    ReasonText *string `json:"reasonText,omitempty"`
    
}

