package shared

// Feature
// Feature represents the settings and status of any Hub Feature.
type Feature struct {
	CreateTime       *string                           `json:"createTime,omitempty"`
	DeleteTime       *string                           `json:"deleteTime,omitempty"`
	Labels           map[string]string                 `json:"labels,omitempty"`
	MembershipSpecs  map[string]MembershipFeatureSpec  `json:"membershipSpecs,omitempty"`
	MembershipStates map[string]MembershipFeatureState `json:"membershipStates,omitempty"`
	Name             *string                           `json:"name,omitempty"`
	ResourceState    *FeatureResourceState             `json:"resourceState,omitempty"`
	ScopeSpecs       map[string]map[string]interface{} `json:"scopeSpecs,omitempty"`
	ScopeStates      map[string]ScopeFeatureState      `json:"scopeStates,omitempty"`
	Spec             *CommonFeatureSpec                `json:"spec,omitempty"`
	State            *CommonFeatureState               `json:"state,omitempty"`
	UpdateTime       *string                           `json:"updateTime,omitempty"`
}

// FeatureInput
// Feature represents the settings and status of any Hub Feature.
type FeatureInput struct {
	Labels          map[string]string                     `json:"labels,omitempty"`
	MembershipSpecs map[string]MembershipFeatureSpecInput `json:"membershipSpecs,omitempty"`
	ResourceState   *FeatureResourceState                 `json:"resourceState,omitempty"`
	ScopeSpecs      map[string]map[string]interface{}     `json:"scopeSpecs,omitempty"`
	Spec            *CommonFeatureSpec                    `json:"spec,omitempty"`
	State           *CommonFeatureState1                  `json:"state,omitempty"`
}
