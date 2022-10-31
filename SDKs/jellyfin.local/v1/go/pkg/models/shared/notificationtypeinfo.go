package shared



type NotificationTypeInfo struct {
    Category *string `json:"Category,omitempty"`
    Enabled *bool `json:"Enabled,omitempty"`
    IsBasedOnUserEvent *bool `json:"IsBasedOnUserEvent,omitempty"`
    Name *string `json:"Name,omitempty"`
    Type *string `json:"Type,omitempty"`
    
}

