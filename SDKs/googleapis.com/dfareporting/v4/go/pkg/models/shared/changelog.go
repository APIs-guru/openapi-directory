package shared

import (
	"time"
)

type ChangeLog struct {
	AccountID       *string    `json:"accountId"`
	Action          *string    `json:"action"`
	ChangeTime      *time.Time `json:"changeTime"`
	FieldName       *string    `json:"fieldName"`
	ID              *string    `json:"id"`
	Kind            *string    `json:"kind"`
	NewValue        *string    `json:"newValue"`
	ObjectID        *string    `json:"objectId"`
	ObjectType      *string    `json:"objectType"`
	OldValue        *string    `json:"oldValue"`
	SubaccountID    *string    `json:"subaccountId"`
	TransactionID   *string    `json:"transactionId"`
	UserProfileID   *string    `json:"userProfileId"`
	UserProfileName *string    `json:"userProfileName"`
}
