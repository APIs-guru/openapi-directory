package shared

type LkeNodeStatusStatusEnum string

const (
	LkeNodeStatusStatusEnumReady    LkeNodeStatusStatusEnum = "ready"
	LkeNodeStatusStatusEnumNotReady LkeNodeStatusStatusEnum = "not_ready"
)

// LkeNodeStatus
// Status information for a Node which is a member of a Kubernetes cluster.
type LkeNodeStatus struct {
	ID         *string                  `json:"id,omitempty"`
	InstanceID *string                  `json:"instance_id,omitempty"`
	Status     *LkeNodeStatusStatusEnum `json:"status,omitempty"`
}
