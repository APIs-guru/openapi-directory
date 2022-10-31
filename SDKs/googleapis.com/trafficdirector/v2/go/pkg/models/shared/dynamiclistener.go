package shared

type DynamicListener struct {
	ActiveState   *DynamicListenerState `json:"activeState,omitempty"`
	DrainingState *DynamicListenerState `json:"drainingState,omitempty"`
	ErrorState    *UpdateFailureState   `json:"errorState,omitempty"`
	Name          *string               `json:"name,omitempty"`
	WarmingState  *DynamicListenerState `json:"warmingState,omitempty"`
}
