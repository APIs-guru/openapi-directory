package shared

type BandingProperties struct {
	FirstBandColor       *Color      `json:"firstBandColor"`
	FirstBandColorStyle  *ColorStyle `json:"firstBandColorStyle"`
	FooterColor          *Color      `json:"footerColor"`
	FooterColorStyle     *ColorStyle `json:"footerColorStyle"`
	HeaderColor          *Color      `json:"headerColor"`
	HeaderColorStyle     *ColorStyle `json:"headerColorStyle"`
	SecondBandColor      *Color      `json:"secondBandColor"`
	SecondBandColorStyle *ColorStyle `json:"secondBandColorStyle"`
}
