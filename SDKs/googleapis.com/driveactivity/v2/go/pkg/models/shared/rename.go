package shared

type Rename struct {
	NewTitle *string `json:"newTitle,omitempty"`
	OldTitle *string `json:"oldTitle,omitempty"`
}
