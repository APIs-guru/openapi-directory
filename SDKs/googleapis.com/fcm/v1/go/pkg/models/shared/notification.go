package shared



type Notification struct {
    Body *string `json:"body,omitempty"`
    Image *string `json:"image,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

