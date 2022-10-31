package shared

type LogEntryOperation struct {
	First    *bool   `json:"first,omitempty"`
	ID       *string `json:"id,omitempty"`
	Last     *bool   `json:"last,omitempty"`
	Producer *string `json:"producer,omitempty"`
}
