package shared

type SavedColumnList struct {
	Items []SavedColumn `json:"items"`
	Kind  *string       `json:"kind"`
}
