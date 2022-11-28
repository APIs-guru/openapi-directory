package shared

// DynamicListener
// Describes a dynamically loaded listener via the LDS API. [#next-free-field: 6]
type DynamicListener struct {
	ActiveState   *DynamicListenerState `json:"activeState,omitempty"`
	DrainingState *DynamicListenerState `json:"drainingState,omitempty"`
	ErrorState    *UpdateFailureState   `json:"errorState,omitempty"`
	Name          *string               `json:"name,omitempty"`
	WarmingState  *DynamicListenerState `json:"warmingState,omitempty"`
}
