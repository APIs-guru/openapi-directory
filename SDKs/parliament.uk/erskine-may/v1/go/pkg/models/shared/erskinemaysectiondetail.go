package shared



type ErskineMaySectionDetail struct {
    ChapterNumber *int32 `json:"chapterNumber,omitempty"`
    ChapterTitle *string `json:"chapterTitle,omitempty"`
    ContentHTML *string `json:"contentHtml,omitempty"`
    Footnotes []ErskineMayFootnote `json:"footnotes,omitempty"`
    ID *int32 `json:"id,omitempty"`
    ParentSectionID *int32 `json:"parentSectionId,omitempty"`
    ParentSectionTitle *string `json:"parentSectionTitle,omitempty"`
    PartNumber *int32 `json:"partNumber,omitempty"`
    PartTitle *string `json:"partTitle,omitempty"`
    SubSections []ErskineMaySectionOverview `json:"subSections,omitempty"`
    Title *string `json:"title,omitempty"`
    TitleChain *string `json:"titleChain,omitempty"`
    
}

