package shared

// NotesProperties
// The properties of Page that are only relevant for pages with page_type NOTES.
type NotesProperties struct {
	SpeakerNotesObjectID *string `json:"speakerNotesObjectId,omitempty"`
}
