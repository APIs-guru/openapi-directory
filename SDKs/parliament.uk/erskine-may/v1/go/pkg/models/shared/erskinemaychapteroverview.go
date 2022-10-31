package shared

type ErskineMayChapterOverview struct {
	Description *string                     `json:"description,omitempty"`
	Number      *int32                      `json:"number,omitempty"`
	PartNumber  *int32                      `json:"partNumber,omitempty"`
	Sections    []ErskineMaySectionOverview `json:"sections,omitempty"`
	Title       *string                     `json:"title,omitempty"`
}
