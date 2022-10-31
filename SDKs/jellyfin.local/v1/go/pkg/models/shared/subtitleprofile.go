package shared



type SubtitleProfile struct {
    Container *string `json:"Container,omitempty"`
    DidlMode *string `json:"DidlMode,omitempty"`
    Format *string `json:"Format,omitempty"`
    Language *string `json:"Language,omitempty"`
    Method *SubtitleDeliveryMethodEnum `json:"Method,omitempty"`
    
}

