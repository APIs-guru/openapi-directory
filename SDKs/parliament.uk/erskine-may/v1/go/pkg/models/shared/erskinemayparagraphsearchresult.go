package shared

type ErskineMayParagraphSearchResult struct {
	ChapterNumber      *int32  `json:"chapterNumber,omitempty"`
	ChapterTitle       *string `json:"chapterTitle,omitempty"`
	ParagraphReference *string `json:"paragraphReference,omitempty"`
	PartNumber         *int32  `json:"partNumber,omitempty"`
	SearchResultText   *string `json:"searchResultText,omitempty"`
	SectionID          *int32  `json:"sectionId,omitempty"`
	SectionTitle       *string `json:"sectionTitle,omitempty"`
	SectionTitleChain  *string `json:"sectionTitleChain,omitempty"`
}
