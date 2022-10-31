package shared



type Error401NgPiis struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    TppMessages []TppMessage401Piis `json:"tppMessages,omitempty"`
    
}

