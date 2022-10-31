package shared

type QueueRequestDto struct {
	ItemIds []string            `json:"ItemIds,omitempty"`
	Mode    *GroupQueueModeEnum `json:"Mode,omitempty"`
}
