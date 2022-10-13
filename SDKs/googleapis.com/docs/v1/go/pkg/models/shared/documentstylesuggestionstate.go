package shared

type DocumentStyleSuggestionState struct {
	BackgroundSuggestionState             *BackgroundSuggestionState `json:"backgroundSuggestionState"`
	DefaultFooterIDSuggested              *bool                      `json:"defaultFooterIdSuggested"`
	DefaultHeaderIDSuggested              *bool                      `json:"defaultHeaderIdSuggested"`
	EvenPageFooterIDSuggested             *bool                      `json:"evenPageFooterIdSuggested"`
	EvenPageHeaderIDSuggested             *bool                      `json:"evenPageHeaderIdSuggested"`
	FirstPageFooterIDSuggested            *bool                      `json:"firstPageFooterIdSuggested"`
	FirstPageHeaderIDSuggested            *bool                      `json:"firstPageHeaderIdSuggested"`
	MarginBottomSuggested                 *bool                      `json:"marginBottomSuggested"`
	MarginFooterSuggested                 *bool                      `json:"marginFooterSuggested"`
	MarginHeaderSuggested                 *bool                      `json:"marginHeaderSuggested"`
	MarginLeftSuggested                   *bool                      `json:"marginLeftSuggested"`
	MarginRightSuggested                  *bool                      `json:"marginRightSuggested"`
	MarginTopSuggested                    *bool                      `json:"marginTopSuggested"`
	PageNumberStartSuggested              *bool                      `json:"pageNumberStartSuggested"`
	PageSizeSuggestionState               *SizeSuggestionState       `json:"pageSizeSuggestionState"`
	UseCustomHeaderFooterMarginsSuggested *bool                      `json:"useCustomHeaderFooterMarginsSuggested"`
	UseEvenPageHeaderFooterSuggested      *bool                      `json:"useEvenPageHeaderFooterSuggested"`
	UseFirstPageHeaderFooterSuggested     *bool                      `json:"useFirstPageHeaderFooterSuggested"`
}
