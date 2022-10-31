package shared



type DocumentStyle struct {
    Background *Background `json:"background,omitempty"`
    DefaultFooterID *string `json:"defaultFooterId,omitempty"`
    DefaultHeaderID *string `json:"defaultHeaderId,omitempty"`
    EvenPageFooterID *string `json:"evenPageFooterId,omitempty"`
    EvenPageHeaderID *string `json:"evenPageHeaderId,omitempty"`
    FirstPageFooterID *string `json:"firstPageFooterId,omitempty"`
    FirstPageHeaderID *string `json:"firstPageHeaderId,omitempty"`
    MarginBottom *Dimension `json:"marginBottom,omitempty"`
    MarginFooter *Dimension `json:"marginFooter,omitempty"`
    MarginHeader *Dimension `json:"marginHeader,omitempty"`
    MarginLeft *Dimension `json:"marginLeft,omitempty"`
    MarginRight *Dimension `json:"marginRight,omitempty"`
    MarginTop *Dimension `json:"marginTop,omitempty"`
    PageNumberStart *int32 `json:"pageNumberStart,omitempty"`
    PageSize *Size `json:"pageSize,omitempty"`
    UseCustomHeaderFooterMargins *bool `json:"useCustomHeaderFooterMargins,omitempty"`
    UseEvenPageHeaderFooter *bool `json:"useEvenPageHeaderFooter,omitempty"`
    UseFirstPageHeaderFooter *bool `json:"useFirstPageHeaderFooter,omitempty"`
    
}

