package shared



type TppMessage409Pis struct {
    Category TppMessageCategoryEnum `json:"category"`
    Code MessageCode409PisEnum `json:"code"`
    Path *string `json:"path,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

