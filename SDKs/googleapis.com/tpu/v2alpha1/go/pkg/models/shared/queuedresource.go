package shared

// QueuedResourceInput
// A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
type QueuedResourceInput struct {
	BestEffort     map[string]interface{} `json:"bestEffort,omitempty"`
	Guaranteed     *Guaranteed            `json:"guaranteed,omitempty"`
	QueueingPolicy *QueueingPolicy        `json:"queueingPolicy,omitempty"`
	State          *QueuedResourceState   `json:"state,omitempty"`
	Tpu            *TpuInput              `json:"tpu,omitempty"`
}

// QueuedResource
// A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
type QueuedResource struct {
	BestEffort     map[string]interface{} `json:"bestEffort,omitempty"`
	Guaranteed     *Guaranteed            `json:"guaranteed,omitempty"`
	Name           *string                `json:"name,omitempty"`
	QueueingPolicy *QueueingPolicy        `json:"queueingPolicy,omitempty"`
	State          *QueuedResourceState   `json:"state,omitempty"`
	Tpu            *Tpu                   `json:"tpu,omitempty"`
}
