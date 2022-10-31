package shared



type AmendmentLine struct {
    HangingIndentation *string `json:"hangingIndentation,omitempty"`
    ImageType *string `json:"imageType,omitempty"`
    Indentation *int32 `json:"indentation,omitempty"`
    IsImage *bool `json:"isImage,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

