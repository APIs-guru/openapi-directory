package shared

type TextElement struct {
	AutoText        *AutoText        `json:"autoText"`
	EndIndex        *int32           `json:"endIndex"`
	ParagraphMarker *ParagraphMarker `json:"paragraphMarker"`
	StartIndex      *int32           `json:"startIndex"`
	TextRun         *TextRun         `json:"textRun"`
}
