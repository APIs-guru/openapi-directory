package shared



type TimeWindowBreak struct {
    Duration int64 `json:"duration"`
    Earliest int64 `json:"earliest"`
    Latest int64 `json:"latest"`
    
}

