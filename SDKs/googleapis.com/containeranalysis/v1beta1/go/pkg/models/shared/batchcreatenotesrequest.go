package shared

type BatchCreateNotesRequest struct {
	Notes map[string]Note `json:"notes"`
}
