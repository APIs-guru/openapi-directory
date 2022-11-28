package shared

// FleetInput
// Fleet contains the Fleet-wide metadata and configuration.
type FleetInput struct {
	DisplayName *string `json:"displayName,omitempty"`
}

// Fleet
// Fleet contains the Fleet-wide metadata and configuration.
type Fleet struct {
	CreateTime  *string              `json:"createTime,omitempty"`
	DeleteTime  *string              `json:"deleteTime,omitempty"`
	DisplayName *string              `json:"displayName,omitempty"`
	Name        *string              `json:"name,omitempty"`
	State       *FleetLifecycleState `json:"state,omitempty"`
	UID         *string              `json:"uid,omitempty"`
	UpdateTime  *string              `json:"updateTime,omitempty"`
}
