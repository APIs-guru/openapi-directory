package shared



type Error409NgSbs struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    TppMessages []TppMessage409Sbs `json:"tppMessages,omitempty"`
    
}

