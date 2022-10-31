package shared



type TppMessage403Sbs struct {
    Category TppMessageCategoryEnum `json:"category"`
    Code MessageCode403SbsEnum `json:"code"`
    Path *string `json:"path,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

