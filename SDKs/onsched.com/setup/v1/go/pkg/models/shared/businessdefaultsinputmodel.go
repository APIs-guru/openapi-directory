package shared



type BusinessDefaultsInputModel struct {
    AutoUpdateCustomer *bool `json:"autoUpdateCustomer,omitempty"`
    BusinessNotification *bool `json:"businessNotification,omitempty"`
    CustomerCity *bool `json:"customerCity,omitempty"`
    CustomerState *bool `json:"customerState,omitempty"`
    EmailInfo *bool `json:"emailInfo,omitempty"`
    EnableUtcTimezone *bool `json:"enableUtcTimezone,omitempty"`
    
}

