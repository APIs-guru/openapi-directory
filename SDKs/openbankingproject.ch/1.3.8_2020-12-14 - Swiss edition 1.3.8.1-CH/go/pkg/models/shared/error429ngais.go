package shared



type Error429NgAis struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    TppMessages []TppMessage429Ais `json:"tppMessages,omitempty"`
    
}

