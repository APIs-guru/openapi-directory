package shared

// DialogAction
// Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code.
type DialogAction struct {
	ActionStatus *ActionStatus `json:"actionStatus,omitempty"`
	Dialog       *Dialog       `json:"dialog,omitempty"`
}
