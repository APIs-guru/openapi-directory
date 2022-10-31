package shared



type Error404NgSbs struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    TppMessages []TppMessage404Sbs `json:"tppMessages,omitempty"`
    
}

