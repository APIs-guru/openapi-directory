package shared

type SocialNotesResponse struct {
	Email                 *string `json:"email,omitempty"`
	FirstName             *string `json:"firstName,omitempty"`
	LastName              *string `json:"lastName,omitempty"`
	PageID                *string `json:"pageId,omitempty"`
	PersonID              *string `json:"personId,omitempty"`
	SocialNoteContent     *string `json:"social-note-content,omitempty"`
	SocialNoteParagraphID *string `json:"social-note-paragraphId,omitempty"`
	UserID                *string `json:"userId,omitempty"`
}
