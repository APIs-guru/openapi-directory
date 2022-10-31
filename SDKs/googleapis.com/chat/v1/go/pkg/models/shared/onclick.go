package shared

type OnClick struct {
	Action   *FormAction `json:"action,omitempty"`
	OpenLink *OpenLink   `json:"openLink,omitempty"`
}
