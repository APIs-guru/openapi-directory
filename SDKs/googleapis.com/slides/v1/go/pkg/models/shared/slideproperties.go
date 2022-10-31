package shared



type SlideProperties struct {
    IsSkipped *bool `json:"isSkipped,omitempty"`
    LayoutObjectID *string `json:"layoutObjectId,omitempty"`
    MasterObjectID *string `json:"masterObjectId,omitempty"`
    NotesPage *Page `json:"notesPage,omitempty"`
    
}

