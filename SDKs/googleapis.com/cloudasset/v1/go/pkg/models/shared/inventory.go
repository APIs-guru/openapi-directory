package shared



type Inventory struct {
    Items map[string]Item `json:"items,omitempty"`
    Name *string `json:"name,omitempty"`
    OsInfo *OsInfo `json:"osInfo,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

