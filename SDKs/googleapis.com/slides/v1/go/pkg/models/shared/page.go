package shared

type PagePageTypeEnum string

const (
	PagePageTypeEnumSlide       PagePageTypeEnum = "SLIDE"
	PagePageTypeEnumMaster      PagePageTypeEnum = "MASTER"
	PagePageTypeEnumLayout      PagePageTypeEnum = "LAYOUT"
	PagePageTypeEnumNotes       PagePageTypeEnum = "NOTES"
	PagePageTypeEnumNotesMaster PagePageTypeEnum = "NOTES_MASTER"
)

type Page struct {
	LayoutProperties *LayoutProperties `json:"layoutProperties,omitempty"`
	MasterProperties *MasterProperties `json:"masterProperties,omitempty"`
	NotesProperties  *NotesProperties  `json:"notesProperties,omitempty"`
	ObjectID         *string           `json:"objectId,omitempty"`
	PageElements     []PageElement     `json:"pageElements,omitempty"`
	PageProperties   *PageProperties   `json:"pageProperties,omitempty"`
	PageType         *PagePageTypeEnum `json:"pageType,omitempty"`
	RevisionID       *string           `json:"revisionId,omitempty"`
	SlideProperties  *SlideProperties  `json:"slideProperties,omitempty"`
}
