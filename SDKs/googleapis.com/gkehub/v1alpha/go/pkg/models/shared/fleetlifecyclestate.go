package shared

type FleetLifecycleStateCodeEnum string

const (
	FleetLifecycleStateCodeEnumCodeUnspecified FleetLifecycleStateCodeEnum = "CODE_UNSPECIFIED"
	FleetLifecycleStateCodeEnumCreating        FleetLifecycleStateCodeEnum = "CREATING"
	FleetLifecycleStateCodeEnumReady           FleetLifecycleStateCodeEnum = "READY"
	FleetLifecycleStateCodeEnumDeleting        FleetLifecycleStateCodeEnum = "DELETING"
	FleetLifecycleStateCodeEnumUpdating        FleetLifecycleStateCodeEnum = "UPDATING"
)

// FleetLifecycleState
// FleetLifecycleState describes the state of a Fleet resource.
type FleetLifecycleState struct {
	Code *FleetLifecycleStateCodeEnum `json:"code,omitempty"`
}
