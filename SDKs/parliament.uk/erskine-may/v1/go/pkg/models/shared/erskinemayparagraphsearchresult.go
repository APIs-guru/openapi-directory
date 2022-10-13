package shared

type ErskineMayParagraphSearchResult struct {
	ChapterNumber      *int32  `json:"chapterNumber"`
	ChapterTitle       *string `json:"chapterTitle"`
	ParagraphReference *string `json:"paragraphReference"`
	PartNumber         *int32  `json:"partNumber"`
	SearchResultText   *string `json:"searchResultText"`
	SectionID          *int32  `json:"sectionId"`
	SectionTitle       *string `json:"sectionTitle"`
	SectionTitleChain  *string `json:"sectionTitleChain"`
}
