package shared

import (
"time")

type ObReadData1 struct {
    ExpirationDateTime *time.Time `json:"ExpirationDateTime,omitempty"`
    Permissions []ObExternalPermissions1CodeEnum `json:"Permissions"`
    TransactionFromDateTime *time.Time `json:"TransactionFromDateTime,omitempty"`
    TransactionToDateTime *time.Time `json:"TransactionToDateTime,omitempty"`
    
}

