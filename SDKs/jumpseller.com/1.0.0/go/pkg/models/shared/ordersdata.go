package shared



type OrdersData struct {
    Average *float32 `json:"average,omitempty"`
    Count *float32 `json:"count,omitempty"`
    Date *string `json:"date,omitempty"`
    Paid *float32 `json:"paid,omitempty"`
    Pending *float32 `json:"pending,omitempty"`
    Total *float32 `json:"total,omitempty"`
    
}

