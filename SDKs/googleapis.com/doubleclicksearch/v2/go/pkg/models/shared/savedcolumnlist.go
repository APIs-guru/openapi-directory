package shared

type SavedColumnList struct {
	Items []SavedColumn `json:"items,omitempty"`
	Kind  *string       `json:"kind,omitempty"`
}
