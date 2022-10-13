package shared

import (
	"time"
)

type EntityTransferEntities struct {
	Linodes []int64 `json:"linodes"`
}

type EntityTransferStatusEnum string

const (
	EntityTransferStatusEnumAccepted  EntityTransferStatusEnum = "accepted"
	EntityTransferStatusEnumCancelled EntityTransferStatusEnum = "cancelled"
	EntityTransferStatusEnumCompleted EntityTransferStatusEnum = "completed"
	EntityTransferStatusEnumFailed    EntityTransferStatusEnum = "failed"
	EntityTransferStatusEnumPending   EntityTransferStatusEnum = "pending"
	EntityTransferStatusEnumStale     EntityTransferStatusEnum = "stale"
)

type EntityTransfer struct {
	Created  *time.Time                `json:"created"`
	Entities *EntityTransferEntities   `json:"entities"`
	Expiry   *time.Time                `json:"expiry"`
	IsSender *bool                     `json:"is_sender"`
	Status   *EntityTransferStatusEnum `json:"status"`
	Token    *string                   `json:"token"`
	Updated  *time.Time                `json:"updated"`
}
