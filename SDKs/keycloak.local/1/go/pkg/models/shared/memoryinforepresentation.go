package shared



type MemoryInfoRepresentation struct {
    Free *int64 `json:"free,omitempty"`
    FreeFormated *string `json:"freeFormated,omitempty"`
    FreePercentage *int64 `json:"freePercentage,omitempty"`
    Total *int64 `json:"total,omitempty"`
    TotalFormated *string `json:"totalFormated,omitempty"`
    Used *int64 `json:"used,omitempty"`
    UsedFormated *string `json:"usedFormated,omitempty"`
    
}

