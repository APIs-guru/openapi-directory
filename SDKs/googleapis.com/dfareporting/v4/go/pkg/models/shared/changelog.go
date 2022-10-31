package shared

import (
"time")

type ChangeLog struct {
    AccountID *string `json:"accountId,omitempty"`
    Action *string `json:"action,omitempty"`
    ChangeTime *time.Time `json:"changeTime,omitempty"`
    FieldName *string `json:"fieldName,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NewValue *string `json:"newValue,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    ObjectType *string `json:"objectType,omitempty"`
    OldValue *string `json:"oldValue,omitempty"`
    SubaccountID *string `json:"subaccountId,omitempty"`
    TransactionID *string `json:"transactionId,omitempty"`
    UserProfileID *string `json:"userProfileId,omitempty"`
    UserProfileName *string `json:"userProfileName,omitempty"`
    
}

