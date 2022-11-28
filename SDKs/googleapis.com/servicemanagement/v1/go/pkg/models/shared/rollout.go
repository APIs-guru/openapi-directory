package shared

type RolloutStatusEnum string

const (
	RolloutStatusEnumRolloutStatusUnspecified RolloutStatusEnum = "ROLLOUT_STATUS_UNSPECIFIED"
	RolloutStatusEnumInProgress               RolloutStatusEnum = "IN_PROGRESS"
	RolloutStatusEnumSuccess                  RolloutStatusEnum = "SUCCESS"
	RolloutStatusEnumCancelled                RolloutStatusEnum = "CANCELLED"
	RolloutStatusEnumFailed                   RolloutStatusEnum = "FAILED"
	RolloutStatusEnumPending                  RolloutStatusEnum = "PENDING"
	RolloutStatusEnumFailedRolledBack         RolloutStatusEnum = "FAILED_ROLLED_BACK"
)

// Rollout
// A rollout resource that defines how service configuration versions are pushed to control plane systems. Typically, you create a new version of the service config, and then create a Rollout to push the service config.
type Rollout struct {
	CreateTime             *string                 `json:"createTime,omitempty"`
	CreatedBy              *string                 `json:"createdBy,omitempty"`
	DeleteServiceStrategy  map[string]interface{}  `json:"deleteServiceStrategy,omitempty"`
	RolloutID              *string                 `json:"rolloutId,omitempty"`
	ServiceName            *string                 `json:"serviceName,omitempty"`
	Status                 *RolloutStatusEnum      `json:"status,omitempty"`
	TrafficPercentStrategy *TrafficPercentStrategy `json:"trafficPercentStrategy,omitempty"`
}
