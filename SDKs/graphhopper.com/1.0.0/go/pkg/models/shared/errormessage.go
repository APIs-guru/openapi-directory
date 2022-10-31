package shared



type ErrorMessage struct {
    Details *string `json:"details,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

