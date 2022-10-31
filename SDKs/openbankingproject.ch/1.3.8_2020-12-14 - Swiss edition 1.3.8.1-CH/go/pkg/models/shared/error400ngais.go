package shared



type Error400NgAis struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    TppMessages []TppMessage400Ais `json:"tppMessages,omitempty"`
    
}

