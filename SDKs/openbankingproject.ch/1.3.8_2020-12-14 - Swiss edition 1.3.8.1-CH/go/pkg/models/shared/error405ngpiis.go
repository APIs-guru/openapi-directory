package shared



type Error405NgPiis struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    TppMessages []TppMessage405Piis `json:"tppMessages,omitempty"`
    
}

