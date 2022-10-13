package shared

type DynamicListener struct {
	ActiveState   *DynamicListenerState `json:"activeState"`
	DrainingState *DynamicListenerState `json:"drainingState"`
	ErrorState    *UpdateFailureState   `json:"errorState"`
	Name          *string               `json:"name"`
	WarmingState  *DynamicListenerState `json:"warmingState"`
}
