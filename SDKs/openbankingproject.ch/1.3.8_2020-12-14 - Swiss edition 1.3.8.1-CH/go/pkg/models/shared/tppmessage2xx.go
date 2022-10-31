package shared



type TppMessage2Xx struct {
    Category TppMessageCategoryEnum `json:"category"`
    Code MessageCode2XxEnum `json:"code"`
    Path *string `json:"path,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

