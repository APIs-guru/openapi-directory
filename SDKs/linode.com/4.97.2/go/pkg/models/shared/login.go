package shared

import (
"time")

type Login struct {
    Datetime *time.Time `json:"datetime,omitempty"`
    ID *int64 `json:"id,omitempty"`
    IP *string `json:"ip,omitempty"`
    Restricted *bool `json:"restricted,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

