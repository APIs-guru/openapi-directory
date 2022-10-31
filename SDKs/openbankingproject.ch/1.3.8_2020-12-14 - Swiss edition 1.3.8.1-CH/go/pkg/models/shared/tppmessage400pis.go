package shared



type TppMessage400Pis struct {
    Category TppMessageCategoryEnum `json:"category"`
    Code MessageCode400PisEnum `json:"code"`
    Path *string `json:"path,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

