package shared

type GroupItem struct {
	Errors   *Errors            `json:"errors"`
	Etag     *string            `json:"etag"`
	GroupID  *string            `json:"groupId"`
	ID       *string            `json:"id"`
	Kind     *string            `json:"kind"`
	Resource *GroupItemResource `json:"resource"`
}
