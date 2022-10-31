package shared



type SubscriptionCreateModify struct {
    Action string `json:"action"`
    CallbackOnModify *bool `json:"callbackOnModify,omitempty"`
    CallbackURL *string `json:"callbackUrl,omitempty"`
    Custom *interface{} `json:"custom,omitempty"`
    Frequency string `json:"frequency"`
    Key *string `json:"key,omitempty"`
    Name *string `json:"name,omitempty"`
    Serial *string `json:"serial,omitempty"`
    StartFrom *string `json:"startFrom,omitempty"`
    
}

