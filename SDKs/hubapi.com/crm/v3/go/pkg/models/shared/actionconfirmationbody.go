package shared



type ActionConfirmationBody struct {
    CancelButtonLabel string `json:"cancelButtonLabel"`
    ConfirmButtonLabel string `json:"confirmButtonLabel"`
    Prompt string `json:"prompt"`
    
}

