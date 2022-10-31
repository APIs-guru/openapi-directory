package shared



type RevisionList struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Revisions []Revision `json:"revisions,omitempty"`
    
}

