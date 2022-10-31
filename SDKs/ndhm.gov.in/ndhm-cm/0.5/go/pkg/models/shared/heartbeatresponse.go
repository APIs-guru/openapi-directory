package shared

import (
	"time"
)

type HeartbeatResponseStatusEnum string

const (
	HeartbeatResponseStatusEnumUp   HeartbeatResponseStatusEnum = "UP"
	HeartbeatResponseStatusEnumDown HeartbeatResponseStatusEnum = "DOWN"
)

type HeartbeatResponse struct {
	Error     *Error                       `json:"error,omitempty"`
	Status    *HeartbeatResponseStatusEnum `json:"status,omitempty"`
	Timestamp *time.Time                   `json:"timestamp,omitempty"`
}
