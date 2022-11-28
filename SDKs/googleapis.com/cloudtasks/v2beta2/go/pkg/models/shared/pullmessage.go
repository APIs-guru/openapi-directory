package shared

// PullMessage
// The pull message contains data that can be used by the caller of LeaseTasks to process the task. This proto can only be used for tasks in a queue which has pull_target set.
type PullMessage struct {
	Payload *string `json:"payload,omitempty"`
	Tag     *string `json:"tag,omitempty"`
}
