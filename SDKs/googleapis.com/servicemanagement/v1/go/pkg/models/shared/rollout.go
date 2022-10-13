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

type Rollout struct {
	CreateTime             *string                 `json:"createTime"`
	CreatedBy              *string                 `json:"createdBy"`
	DeleteServiceStrategy  map[string]interface{}  `json:"deleteServiceStrategy"`
	RolloutID              *string                 `json:"rolloutId"`
	ServiceName            *string                 `json:"serviceName"`
	Status                 *RolloutStatusEnum      `json:"status"`
	TrafficPercentStrategy *TrafficPercentStrategy `json:"trafficPercentStrategy"`
}
