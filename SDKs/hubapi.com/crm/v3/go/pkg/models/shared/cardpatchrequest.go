package shared



type CardPatchRequest struct {
    Actions *CardActions `json:"actions,omitempty"`
    Display *CardDisplayBody `json:"display,omitempty"`
    Fetch *CardFetchBodyPatch `json:"fetch,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

