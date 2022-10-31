package shared



type HiddenPlayerList struct {
    Items []HiddenPlayer `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

