package shared

type DialogAction struct {
	ActionStatus *ActionStatus `json:"actionStatus"`
	Dialog       *Dialog       `json:"dialog"`
}
