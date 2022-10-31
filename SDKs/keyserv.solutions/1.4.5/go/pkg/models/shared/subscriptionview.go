package shared

import (
"time")

type SubscriptionView struct {
    Action string `json:"action"`
    CallbackOnModify bool `json:"callbackOnModify"`
    CallbackURL *string `json:"callbackUrl,omitempty"`
    Commenced time.Time `json:"commenced"`
    Created *time.Time `json:"created,omitempty"`
    Custom *interface{} `json:"custom,omitempty"`
    Frequency string `json:"frequency"`
    Keys []KeyView `json:"keys,omitempty"`
    Name *string `json:"name,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    
}

