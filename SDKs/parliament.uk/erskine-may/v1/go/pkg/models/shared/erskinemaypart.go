package shared

type ErskineMayPart struct {
	Chapters    []ErskineMayChapterOverview `json:"chapters"`
	Description *string                     `json:"description"`
	Number      *int32                      `json:"number"`
	Title       *string                     `json:"title"`
}
