package shared

type DocumentStyle struct {
	Background                   *Background `json:"background"`
	DefaultFooterID              *string     `json:"defaultFooterId"`
	DefaultHeaderID              *string     `json:"defaultHeaderId"`
	EvenPageFooterID             *string     `json:"evenPageFooterId"`
	EvenPageHeaderID             *string     `json:"evenPageHeaderId"`
	FirstPageFooterID            *string     `json:"firstPageFooterId"`
	FirstPageHeaderID            *string     `json:"firstPageHeaderId"`
	MarginBottom                 *Dimension  `json:"marginBottom"`
	MarginFooter                 *Dimension  `json:"marginFooter"`
	MarginHeader                 *Dimension  `json:"marginHeader"`
	MarginLeft                   *Dimension  `json:"marginLeft"`
	MarginRight                  *Dimension  `json:"marginRight"`
	MarginTop                    *Dimension  `json:"marginTop"`
	PageNumberStart              *int32      `json:"pageNumberStart"`
	PageSize                     *Size       `json:"pageSize"`
	UseCustomHeaderFooterMargins *bool       `json:"useCustomHeaderFooterMargins"`
	UseEvenPageHeaderFooter      *bool       `json:"useEvenPageHeaderFooter"`
	UseFirstPageHeaderFooter     *bool       `json:"useFirstPageHeaderFooter"`
}
