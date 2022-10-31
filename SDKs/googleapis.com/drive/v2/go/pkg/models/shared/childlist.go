package shared



type ChildList struct {
    Etag *string `json:"etag,omitempty"`
    Items []ChildReference `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextLink *string `json:"nextLink,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    
}

