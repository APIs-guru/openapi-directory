package shared

type Feature struct {
	CreateTime       *string                           `json:"createTime"`
	DeleteTime       *string                           `json:"deleteTime"`
	Labels           map[string]string                 `json:"labels"`
	MembershipSpecs  map[string]MembershipFeatureSpec  `json:"membershipSpecs"`
	MembershipStates map[string]MembershipFeatureState `json:"membershipStates"`
	Name             *string                           `json:"name"`
	ResourceState    *FeatureResourceState             `json:"resourceState"`
	Spec             *CommonFeatureSpec                `json:"spec"`
	State            *CommonFeatureState               `json:"state"`
	UpdateTime       *string                           `json:"updateTime"`
}
