package shared

type ParagraphElement struct {
	AutoText            *AutoText            `json:"autoText"`
	ColumnBreak         *ColumnBreak         `json:"columnBreak"`
	EndIndex            *int32               `json:"endIndex"`
	Equation            *Equation            `json:"equation"`
	FootnoteReference   *FootnoteReference   `json:"footnoteReference"`
	HorizontalRule      *HorizontalRule      `json:"horizontalRule"`
	InlineObjectElement *InlineObjectElement `json:"inlineObjectElement"`
	PageBreak           *PageBreak           `json:"pageBreak"`
	Person              *Person              `json:"person"`
	RichLink            *RichLink            `json:"richLink"`
	StartIndex          *int32               `json:"startIndex"`
	TextRun             *TextRun             `json:"textRun"`
}
