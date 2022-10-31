package shared



type BandingProperties struct {
    FirstBandColor *Color `json:"firstBandColor,omitempty"`
    FirstBandColorStyle *ColorStyle `json:"firstBandColorStyle,omitempty"`
    FooterColor *Color `json:"footerColor,omitempty"`
    FooterColorStyle *ColorStyle `json:"footerColorStyle,omitempty"`
    HeaderColor *Color `json:"headerColor,omitempty"`
    HeaderColorStyle *ColorStyle `json:"headerColorStyle,omitempty"`
    SecondBandColor *Color `json:"secondBandColor,omitempty"`
    SecondBandColorStyle *ColorStyle `json:"secondBandColorStyle,omitempty"`
    
}

