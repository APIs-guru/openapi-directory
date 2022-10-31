package shared



type Card struct {
    CardActions []CardAction `json:"cardActions,omitempty"`
    Header *CardHeader `json:"header,omitempty"`
    Name *string `json:"name,omitempty"`
    Sections []Section `json:"sections,omitempty"`
    
}

