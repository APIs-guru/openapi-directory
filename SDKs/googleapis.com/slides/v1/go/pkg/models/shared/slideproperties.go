package shared

// SlideProperties
// The properties of Page that are only relevant for pages with page_type SLIDE.
type SlideProperties struct {
	IsSkipped      *bool   `json:"isSkipped,omitempty"`
	LayoutObjectID *string `json:"layoutObjectId,omitempty"`
	MasterObjectID *string `json:"masterObjectId,omitempty"`
	NotesPage      *Page   `json:"notesPage,omitempty"`
}
