package shared

type CustomBiddingModelDetailsReadinessStateEnum string

const (
	CustomBiddingModelDetailsReadinessStateEnumReadinessStateUnspecified      CustomBiddingModelDetailsReadinessStateEnum = "READINESS_STATE_UNSPECIFIED"
	CustomBiddingModelDetailsReadinessStateEnumReadinessStateActive           CustomBiddingModelDetailsReadinessStateEnum = "READINESS_STATE_ACTIVE"
	CustomBiddingModelDetailsReadinessStateEnumReadinessStateInsufficientData CustomBiddingModelDetailsReadinessStateEnum = "READINESS_STATE_INSUFFICIENT_DATA"
	CustomBiddingModelDetailsReadinessStateEnumReadinessStateTraining         CustomBiddingModelDetailsReadinessStateEnum = "READINESS_STATE_TRAINING"
	CustomBiddingModelDetailsReadinessStateEnumReadinessStateNoValidScript    CustomBiddingModelDetailsReadinessStateEnum = "READINESS_STATE_NO_VALID_SCRIPT"
)

type CustomBiddingModelDetailsSuspensionStateEnum string

const (
	CustomBiddingModelDetailsSuspensionStateEnumSuspensionStateUnspecified CustomBiddingModelDetailsSuspensionStateEnum = "SUSPENSION_STATE_UNSPECIFIED"
	CustomBiddingModelDetailsSuspensionStateEnumSuspensionStateEnabled     CustomBiddingModelDetailsSuspensionStateEnum = "SUSPENSION_STATE_ENABLED"
	CustomBiddingModelDetailsSuspensionStateEnumSuspensionStateDormant     CustomBiddingModelDetailsSuspensionStateEnum = "SUSPENSION_STATE_DORMANT"
	CustomBiddingModelDetailsSuspensionStateEnumSuspensionStateSuspended   CustomBiddingModelDetailsSuspensionStateEnum = "SUSPENSION_STATE_SUSPENDED"
)

type CustomBiddingModelDetails struct {
	AdvertiserID    *string                                       `json:"advertiserId"`
	ReadinessState  *CustomBiddingModelDetailsReadinessStateEnum  `json:"readinessState"`
	SuspensionState *CustomBiddingModelDetailsSuspensionStateEnum `json:"suspensionState"`
}
