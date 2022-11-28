package shared

// ScopeFeatureState
// ScopeFeatureState contains Scope-wide Feature status information.
type ScopeFeatureState struct {
	State *FeatureState `json:"state,omitempty"`
}
