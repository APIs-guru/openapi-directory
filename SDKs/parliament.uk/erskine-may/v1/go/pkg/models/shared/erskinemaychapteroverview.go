package shared

type ErskineMayChapterOverview struct {
	Description *string                     `json:"description"`
	Number      *int32                      `json:"number"`
	PartNumber  *int32                      `json:"partNumber"`
	Sections    []ErskineMaySectionOverview `json:"sections"`
	Title       *string                     `json:"title"`
}
