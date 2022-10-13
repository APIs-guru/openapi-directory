package shared

type Rename struct {
	NewTitle *string `json:"newTitle"`
	OldTitle *string `json:"oldTitle"`
}
