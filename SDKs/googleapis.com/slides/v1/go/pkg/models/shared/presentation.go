package shared

type Presentation struct {
	Layouts        []Page  `json:"layouts"`
	Locale         *string `json:"locale"`
	Masters        []Page  `json:"masters"`
	NotesMaster    *Page   `json:"notesMaster"`
	PageSize       *Size   `json:"pageSize"`
	PresentationID *string `json:"presentationId"`
	RevisionID     *string `json:"revisionId"`
	Slides         []Page  `json:"slides"`
	Title          *string `json:"title"`
}
