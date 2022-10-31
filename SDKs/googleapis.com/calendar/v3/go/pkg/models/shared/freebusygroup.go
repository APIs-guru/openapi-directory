package shared



type FreeBusyGroup struct {
    Calendars []string `json:"calendars,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

