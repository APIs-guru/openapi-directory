package shared



type DocumentStyleSuggestionState struct {
    BackgroundSuggestionState *BackgroundSuggestionState `json:"backgroundSuggestionState,omitempty"`
    DefaultFooterIDSuggested *bool `json:"defaultFooterIdSuggested,omitempty"`
    DefaultHeaderIDSuggested *bool `json:"defaultHeaderIdSuggested,omitempty"`
    EvenPageFooterIDSuggested *bool `json:"evenPageFooterIdSuggested,omitempty"`
    EvenPageHeaderIDSuggested *bool `json:"evenPageHeaderIdSuggested,omitempty"`
    FirstPageFooterIDSuggested *bool `json:"firstPageFooterIdSuggested,omitempty"`
    FirstPageHeaderIDSuggested *bool `json:"firstPageHeaderIdSuggested,omitempty"`
    MarginBottomSuggested *bool `json:"marginBottomSuggested,omitempty"`
    MarginFooterSuggested *bool `json:"marginFooterSuggested,omitempty"`
    MarginHeaderSuggested *bool `json:"marginHeaderSuggested,omitempty"`
    MarginLeftSuggested *bool `json:"marginLeftSuggested,omitempty"`
    MarginRightSuggested *bool `json:"marginRightSuggested,omitempty"`
    MarginTopSuggested *bool `json:"marginTopSuggested,omitempty"`
    PageNumberStartSuggested *bool `json:"pageNumberStartSuggested,omitempty"`
    PageSizeSuggestionState *SizeSuggestionState `json:"pageSizeSuggestionState,omitempty"`
    UseCustomHeaderFooterMarginsSuggested *bool `json:"useCustomHeaderFooterMarginsSuggested,omitempty"`
    UseEvenPageHeaderFooterSuggested *bool `json:"useEvenPageHeaderFooterSuggested,omitempty"`
    UseFirstPageHeaderFooterSuggested *bool `json:"useFirstPageHeaderFooterSuggested,omitempty"`
    
}

