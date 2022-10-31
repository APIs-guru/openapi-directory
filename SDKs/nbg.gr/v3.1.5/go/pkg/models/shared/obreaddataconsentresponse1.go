package shared

import (
	"time"
)

type ObReadDataConsentResponse1 struct {
	ConsentID               string                           `json:"ConsentId"`
	CreationDateTime        time.Time                        `json:"CreationDateTime"`
	ExpirationDateTime      *time.Time                       `json:"ExpirationDateTime,omitempty"`
	Permissions             []ObExternalPermissions1CodeEnum `json:"Permissions"`
	Status                  ObExternalRequestStatus1CodeEnum `json:"Status"`
	StatusUpdateDateTime    time.Time                        `json:"StatusUpdateDateTime"`
	TransactionFromDateTime *time.Time                       `json:"TransactionFromDateTime,omitempty"`
	TransactionToDateTime   *time.Time                       `json:"TransactionToDateTime,omitempty"`
}
