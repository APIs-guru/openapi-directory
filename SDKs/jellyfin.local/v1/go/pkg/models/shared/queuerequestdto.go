package shared

type QueueRequestDto struct {
	ItemIds []string            `json:"ItemIds"`
	Mode    *GroupQueueModeEnum `json:"Mode"`
}
