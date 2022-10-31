package shared



type TppMessage404Piis struct {
    Category TppMessageCategoryEnum `json:"category"`
    Code MessageCode404PiisEnum `json:"code"`
    Path *string `json:"path,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

