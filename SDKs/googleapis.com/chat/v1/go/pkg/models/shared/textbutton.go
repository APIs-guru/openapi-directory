package shared



type TextButton struct {
    OnClick *OnClick `json:"onClick,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

