package shared

// TextElement
// A TextElement describes the content of a range of indices in the text content of a Shape or TableCell.
type TextElement struct {
	AutoText        *AutoText        `json:"autoText,omitempty"`
	EndIndex        *int32           `json:"endIndex,omitempty"`
	ParagraphMarker *ParagraphMarker `json:"paragraphMarker,omitempty"`
	StartIndex      *int32           `json:"startIndex,omitempty"`
	TextRun         *TextRun         `json:"textRun,omitempty"`
}
