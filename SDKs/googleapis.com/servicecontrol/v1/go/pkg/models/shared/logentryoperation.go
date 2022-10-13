package shared

type LogEntryOperation struct {
	First    *bool   `json:"first"`
	ID       *string `json:"id"`
	Last     *bool   `json:"last"`
	Producer *string `json:"producer"`
}
