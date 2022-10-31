package shared



type Error404NgPiis struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    TppMessages []TppMessage404Piis `json:"tppMessages,omitempty"`
    
}

