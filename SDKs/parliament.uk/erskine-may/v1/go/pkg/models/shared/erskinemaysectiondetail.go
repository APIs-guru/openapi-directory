package shared

type ErskineMaySectionDetail struct {
	ChapterNumber      *int32                      `json:"chapterNumber"`
	ChapterTitle       *string                     `json:"chapterTitle"`
	ContentHTML        *string                     `json:"contentHtml"`
	Footnotes          []ErskineMayFootnote        `json:"footnotes"`
	ID                 *int32                      `json:"id"`
	ParentSectionID    *int32                      `json:"parentSectionId"`
	ParentSectionTitle *string                     `json:"parentSectionTitle"`
	PartNumber         *int32                      `json:"partNumber"`
	PartTitle          *string                     `json:"partTitle"`
	SubSections        []ErskineMaySectionOverview `json:"subSections"`
	Title              *string                     `json:"title"`
	TitleChain         *string                     `json:"titleChain"`
}
