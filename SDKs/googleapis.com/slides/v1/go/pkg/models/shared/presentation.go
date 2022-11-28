package shared

// Presentation
// A Google Slides presentation.
type Presentation struct {
	Layouts        []Page  `json:"layouts,omitempty"`
	Locale         *string `json:"locale,omitempty"`
	Masters        []Page  `json:"masters,omitempty"`
	NotesMaster    *Page   `json:"notesMaster,omitempty"`
	PageSize       *Size   `json:"pageSize,omitempty"`
	PresentationID *string `json:"presentationId,omitempty"`
	RevisionID     *string `json:"revisionId,omitempty"`
	Slides         []Page  `json:"slides,omitempty"`
	Title          *string `json:"title,omitempty"`
}
