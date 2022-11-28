package shared

// OnClick
// An onclick action (e.g. open a link).
type OnClick struct {
	Action   *FormAction `json:"action,omitempty"`
	OpenLink *OpenLink   `json:"openLink,omitempty"`
}
