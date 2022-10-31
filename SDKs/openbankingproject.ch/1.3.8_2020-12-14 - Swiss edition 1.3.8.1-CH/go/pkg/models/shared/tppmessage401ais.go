package shared



type TppMessage401Ais struct {
    Category TppMessageCategoryEnum `json:"category"`
    Code MessageCode401AisEnum `json:"code"`
    Path *string `json:"path,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

