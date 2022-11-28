package shared

import (
	"time"
)

// ServiceTransferEntities
// A collection of the services to include in this transfer request, separated by type.
type ServiceTransferEntities struct {
	Linodes []int64 `json:"linodes,omitempty"`
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

// ServiceTransfer
// An object representing a Service Transfer.
type ServiceTransfer struct {
	Created  *time.Time                 `json:"created,omitempty"`
	Entities *ServiceTransferEntities   `json:"entities,omitempty"`
	Expiry   *time.Time                 `json:"expiry,omitempty"`
	IsSender *bool                      `json:"is_sender,omitempty"`
	Status   *ServiceTransferStatusEnum `json:"status,omitempty"`
	Token    *string                    `json:"token,omitempty"`
	Updated  *time.Time                 `json:"updated,omitempty"`
}
