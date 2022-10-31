package shared



type Error403NgPiis struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    TppMessages []TppMessage403Piis `json:"tppMessages,omitempty"`
    
}

