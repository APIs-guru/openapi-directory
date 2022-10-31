package shared



type CustomEventStatus struct {
    CustomEvent *CustomEvent `json:"customEvent,omitempty"`
    Errors []CustomEventError `json:"errors,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

