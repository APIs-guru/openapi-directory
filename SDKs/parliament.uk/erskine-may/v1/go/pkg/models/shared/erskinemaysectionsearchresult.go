package shared

type ErskineMaySectionSearchResult struct {
	ChapterNumber     *int32  `json:"chapterNumber"`
	ChapterTitle      *string `json:"chapterTitle"`
	PartNumber        *int32  `json:"partNumber"`
	SectionID         *int32  `json:"sectionId"`
	SectionTitle      *string `json:"sectionTitle"`
	SectionTitleChain *string `json:"sectionTitleChain"`
}
