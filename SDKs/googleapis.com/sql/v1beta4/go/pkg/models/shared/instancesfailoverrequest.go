package shared

type InstancesFailoverRequest struct {
	FailoverContext *FailoverContext `json:"failoverContext,omitempty"`
}
