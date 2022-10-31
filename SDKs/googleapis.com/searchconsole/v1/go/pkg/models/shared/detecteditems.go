package shared



type DetectedItems struct {
    Items []Item `json:"items,omitempty"`
    RichResultType *string `json:"richResultType,omitempty"`
    
}

