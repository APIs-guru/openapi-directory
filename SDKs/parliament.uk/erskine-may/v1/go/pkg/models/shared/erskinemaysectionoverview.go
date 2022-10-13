package shared

type ErskineMaySectionOverview struct {
	ID          *int32                      `json:"id"`
	SubSections []ErskineMaySectionOverview `json:"subSections"`
	Title       *string                     `json:"title"`
	TitleChain  *string                     `json:"titleChain"`
}
