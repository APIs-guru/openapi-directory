package shared

type StructuralElement struct {
	EndIndex        *int32           `json:"endIndex"`
	Paragraph       *Paragraph       `json:"paragraph"`
	SectionBreak    *SectionBreak    `json:"sectionBreak"`
	StartIndex      *int32           `json:"startIndex"`
	Table           *Table           `json:"table"`
	TableOfContents *TableOfContents `json:"tableOfContents"`
}
