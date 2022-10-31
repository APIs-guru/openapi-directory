package shared



type Amount struct {
    Pretax *Price `json:"pretax,omitempty"`
    Tax *Price `json:"tax,omitempty"`
    
}

