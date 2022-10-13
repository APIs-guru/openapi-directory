package shared

import (
	"time"
)

type ServiceTransferEntities struct {
	Linodes []int64 `json:"linodes"`
}

type ServiceTransferStatusEnum string

const (
	ServiceTransferStatusEnumAccepted  ServiceTransferStatusEnum = "accepted"
	ServiceTransferStatusEnumCancelled ServiceTransferStatusEnum = "cancelled"
	ServiceTransferStatusEnumCompleted ServiceTransferStatusEnum = "completed"
	ServiceTransferStatusEnumFailed    ServiceTransferStatusEnum = "failed"
	ServiceTransferStatusEnumPending   ServiceTransferStatusEnum = "pending"
	ServiceTransferStatusEnumStale     ServiceTransferStatusEnum = "stale"
)

type ServiceTransfer struct {
	Created  *time.Time                 `json:"created"`
	Entities *ServiceTransferEntities   `json:"entities"`
	Expiry   *time.Time                 `json:"expiry"`
	IsSender *bool                      `json:"is_sender"`
	Status   *ServiceTransferStatusEnum `json:"status"`
	Token    *string                    `json:"token"`
	Updated  *time.Time                 `json:"updated"`
}
