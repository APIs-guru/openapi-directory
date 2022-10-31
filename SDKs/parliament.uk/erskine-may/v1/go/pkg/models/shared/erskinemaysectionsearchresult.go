package shared



type ErskineMaySectionSearchResult struct {
    ChapterNumber *int32 `json:"chapterNumber,omitempty"`
    ChapterTitle *string `json:"chapterTitle,omitempty"`
    PartNumber *int32 `json:"partNumber,omitempty"`
    SectionID *int32 `json:"sectionId,omitempty"`
    SectionTitle *string `json:"sectionTitle,omitempty"`
    SectionTitleChain *string `json:"sectionTitleChain,omitempty"`
    
}

