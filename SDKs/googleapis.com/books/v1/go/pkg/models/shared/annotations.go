package shared



type Annotations struct {
    Items []Annotation `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TotalItems *int32 `json:"totalItems,omitempty"`
    
}

