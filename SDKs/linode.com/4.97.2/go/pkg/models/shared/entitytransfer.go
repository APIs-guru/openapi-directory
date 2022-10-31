package shared

import (
"time")

type EntityTransferEntities struct {
    Linodes []int64 `json:"linodes,omitempty"`
    
}


type EntityTransferStatusEnum string

const (
    EntityTransferStatusEnumAccepted EntityTransferStatusEnum = "accepted"
EntityTransferStatusEnumCancelled EntityTransferStatusEnum = "cancelled"
EntityTransferStatusEnumCompleted EntityTransferStatusEnum = "completed"
EntityTransferStatusEnumFailed EntityTransferStatusEnum = "failed"
EntityTransferStatusEnumPending EntityTransferStatusEnum = "pending"
EntityTransferStatusEnumStale EntityTransferStatusEnum = "stale"
)


type EntityTransfer struct {
    Created *time.Time `json:"created,omitempty"`
    Entities *EntityTransferEntities `json:"entities,omitempty"`
    Expiry *time.Time `json:"expiry,omitempty"`
    IsSender *bool `json:"is_sender,omitempty"`
    Status *EntityTransferStatusEnum `json:"status,omitempty"`
    Token *string `json:"token,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    
}

