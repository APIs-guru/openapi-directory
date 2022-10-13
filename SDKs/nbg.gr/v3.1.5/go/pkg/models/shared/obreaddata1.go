package shared

import (
	"time"
)

type ObReadData1 struct {
	ExpirationDateTime      *time.Time                       `json:"ExpirationDateTime"`
	Permissions             []ObExternalPermissions1CodeEnum `json:"Permissions"`
	TransactionFromDateTime *time.Time                       `json:"TransactionFromDateTime"`
	TransactionToDateTime   *time.Time                       `json:"TransactionToDateTime"`
}
