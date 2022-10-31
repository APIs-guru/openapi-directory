package shared



type Links struct {
    DroppedLinksCount *int32 `json:"droppedLinksCount,omitempty"`
    Link []Link `json:"link,omitempty"`
    
}

