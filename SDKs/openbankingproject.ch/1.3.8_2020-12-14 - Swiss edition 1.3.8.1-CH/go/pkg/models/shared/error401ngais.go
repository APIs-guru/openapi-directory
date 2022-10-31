package shared



type Error401NgAis struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    TppMessages []TppMessage401Ais `json:"tppMessages,omitempty"`
    
}

