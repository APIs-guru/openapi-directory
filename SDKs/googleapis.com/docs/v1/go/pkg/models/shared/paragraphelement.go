package shared



type ParagraphElement struct {
    AutoText *AutoText `json:"autoText,omitempty"`
    ColumnBreak *ColumnBreak `json:"columnBreak,omitempty"`
    EndIndex *int32 `json:"endIndex,omitempty"`
    Equation *Equation `json:"equation,omitempty"`
    FootnoteReference *FootnoteReference `json:"footnoteReference,omitempty"`
    HorizontalRule *HorizontalRule `json:"horizontalRule,omitempty"`
    InlineObjectElement *InlineObjectElement `json:"inlineObjectElement,omitempty"`
    PageBreak *PageBreak `json:"pageBreak,omitempty"`
    Person *Person `json:"person,omitempty"`
    RichLink *RichLink `json:"richLink,omitempty"`
    StartIndex *int32 `json:"startIndex,omitempty"`
    TextRun *TextRun `json:"textRun,omitempty"`
    
}

