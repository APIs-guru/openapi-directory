package shared



type Seriesmembership struct {
    Kind *string `json:"kind,omitempty"`
    Member []Volume `json:"member,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

