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
	LayoutProperties *LayoutProperties `json:"layoutProperties"`
	MasterProperties *MasterProperties `json:"masterProperties"`
	NotesProperties  *NotesProperties  `json:"notesProperties"`
	ObjectID         *string           `json:"objectId"`
	PageElements     []PageElement     `json:"pageElements"`
	PageProperties   *PageProperties   `json:"pageProperties"`
	PageType         *PagePageTypeEnum `json:"pageType"`
	RevisionID       *string           `json:"revisionId"`
	SlideProperties  *SlideProperties  `json:"slideProperties"`
}
