package shared

// GroupItem
// A group item.
type GroupItem struct {
	Errors   *Errors            `json:"errors,omitempty"`
	Etag     *string            `json:"etag,omitempty"`
	GroupID  *string            `json:"groupId,omitempty"`
	ID       *string            `json:"id,omitempty"`
	Kind     *string            `json:"kind,omitempty"`
	Resource *GroupItemResource `json:"resource,omitempty"`
}
