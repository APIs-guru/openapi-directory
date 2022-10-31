package shared

type ErskineMaySectionOverview struct {
	ID          *int32                      `json:"id,omitempty"`
	SubSections []ErskineMaySectionOverview `json:"subSections,omitempty"`
	Title       *string                     `json:"title,omitempty"`
	TitleChain  *string                     `json:"titleChain,omitempty"`
}
