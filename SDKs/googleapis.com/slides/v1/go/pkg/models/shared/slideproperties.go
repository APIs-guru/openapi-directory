package shared

type SlideProperties struct {
	IsSkipped      *bool   `json:"isSkipped"`
	LayoutObjectID *string `json:"layoutObjectId"`
	MasterObjectID *string `json:"masterObjectId"`
	NotesPage      *Page   `json:"notesPage"`
}
