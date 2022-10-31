package shared



type TppMessage409Ais struct {
    Category TppMessageCategoryEnum `json:"category"`
    Code MessageCode409AisEnum `json:"code"`
    Path *string `json:"path,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

