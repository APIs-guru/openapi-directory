package shared



type TextElement struct {
    AutoText *AutoText `json:"autoText,omitempty"`
    EndIndex *int32 `json:"endIndex,omitempty"`
    ParagraphMarker *ParagraphMarker `json:"paragraphMarker,omitempty"`
    StartIndex *int32 `json:"startIndex,omitempty"`
    TextRun *TextRun `json:"textRun,omitempty"`
    
}

