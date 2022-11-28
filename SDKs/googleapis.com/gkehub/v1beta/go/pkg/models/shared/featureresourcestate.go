package shared

type FeatureResourceStateStateEnum string

const (
	FeatureResourceStateStateEnumStateUnspecified FeatureResourceStateStateEnum = "STATE_UNSPECIFIED"
	FeatureResourceStateStateEnumEnabling         FeatureResourceStateStateEnum = "ENABLING"
	FeatureResourceStateStateEnumActive           FeatureResourceStateStateEnum = "ACTIVE"
	FeatureResourceStateStateEnumDisabling        FeatureResourceStateStateEnum = "DISABLING"
	FeatureResourceStateStateEnumUpdating         FeatureResourceStateStateEnum = "UPDATING"
	FeatureResourceStateStateEnumServiceUpdating  FeatureResourceStateStateEnum = "SERVICE_UPDATING"
)

// FeatureResourceState
// FeatureResourceState describes the state of a Feature *resource* in the GkeHub API. See `FeatureState` for the "running state" of the Feature in the Hub and across Memberships.
type FeatureResourceState struct {
	State *FeatureResourceStateStateEnum `json:"state,omitempty"`
}
