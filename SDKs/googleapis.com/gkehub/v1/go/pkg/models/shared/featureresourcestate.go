package shared




type FeatureResourceStateStateEnum string

const (
    FeatureResourceStateStateEnumStateUnspecified FeatureResourceStateStateEnum = "STATE_UNSPECIFIED"
FeatureResourceStateStateEnumEnabling FeatureResourceStateStateEnum = "ENABLING"
FeatureResourceStateStateEnumActive FeatureResourceStateStateEnum = "ACTIVE"
FeatureResourceStateStateEnumDisabling FeatureResourceStateStateEnum = "DISABLING"
FeatureResourceStateStateEnumUpdating FeatureResourceStateStateEnum = "UPDATING"
FeatureResourceStateStateEnumServiceUpdating FeatureResourceStateStateEnum = "SERVICE_UPDATING"
)


type FeatureResourceState struct {
    State *FeatureResourceStateStateEnum `json:"state,omitempty"`
    
}

