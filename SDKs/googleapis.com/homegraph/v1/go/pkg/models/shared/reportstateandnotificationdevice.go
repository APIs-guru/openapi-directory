package shared



type ReportStateAndNotificationDevice struct {
    Notifications map[string]interface{} `json:"notifications,omitempty"`
    States map[string]interface{} `json:"states,omitempty"`
    
}

