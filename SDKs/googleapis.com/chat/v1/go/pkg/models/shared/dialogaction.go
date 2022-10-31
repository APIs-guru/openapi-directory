package shared

type DialogAction struct {
	ActionStatus *ActionStatus `json:"actionStatus,omitempty"`
	Dialog       *Dialog       `json:"dialog,omitempty"`
}
