package shared

type Feature struct {
	CreateTime       *string                           `json:"createTime,omitempty"`
	DeleteTime       *string                           `json:"deleteTime,omitempty"`
	Labels           map[string]string                 `json:"labels,omitempty"`
	MembershipSpecs  map[string]MembershipFeatureSpec  `json:"membershipSpecs,omitempty"`
	MembershipStates map[string]MembershipFeatureState `json:"membershipStates,omitempty"`
	Name             *string                           `json:"name,omitempty"`
	ResourceState    *FeatureResourceState             `json:"resourceState,omitempty"`
	Spec             *CommonFeatureSpec                `json:"spec,omitempty"`
	State            *CommonFeatureState               `json:"state,omitempty"`
	UpdateTime       *string                           `json:"updateTime,omitempty"`
}
