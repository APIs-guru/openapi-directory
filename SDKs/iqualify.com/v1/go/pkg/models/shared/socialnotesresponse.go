package shared

type SocialNotesResponse struct {
	Email                 *string `json:"email"`
	FirstName             *string `json:"firstName"`
	LastName              *string `json:"lastName"`
	PageID                *string `json:"pageId"`
	PersonID              *string `json:"personId"`
	SocialNoteContent     *string `json:"social-note-content"`
	SocialNoteParagraphID *string `json:"social-note-paragraphId"`
	UserID                *string `json:"userId"`
}
