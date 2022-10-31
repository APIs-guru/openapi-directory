package shared



type StructuralElement struct {
    EndIndex *int32 `json:"endIndex,omitempty"`
    Paragraph *Paragraph `json:"paragraph,omitempty"`
    SectionBreak *SectionBreak `json:"sectionBreak,omitempty"`
    StartIndex *int32 `json:"startIndex,omitempty"`
    Table *Table `json:"table,omitempty"`
    TableOfContents *TableOfContents `json:"tableOfContents,omitempty"`
    
}

