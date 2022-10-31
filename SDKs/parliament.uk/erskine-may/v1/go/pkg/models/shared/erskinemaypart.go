package shared



type ErskineMayPart struct {
    Chapters []ErskineMayChapterOverview `json:"chapters,omitempty"`
    Description *string `json:"description,omitempty"`
    Number *int32 `json:"number,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

