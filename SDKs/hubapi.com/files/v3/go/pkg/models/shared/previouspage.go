package shared



type PreviousPage struct {
    Before string `json:"before"`
    Link *string `json:"link,omitempty"`
    
}

