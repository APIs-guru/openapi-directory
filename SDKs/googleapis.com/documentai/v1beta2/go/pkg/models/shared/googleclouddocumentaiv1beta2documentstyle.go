package shared



type GoogleCloudDocumentaiV1beta2DocumentStyle struct {
    BackgroundColor *GoogleTypeColor `json:"backgroundColor,omitempty"`
    Color *GoogleTypeColor `json:"color,omitempty"`
    FontFamily *string `json:"fontFamily,omitempty"`
    FontSize *GoogleCloudDocumentaiV1beta2DocumentStyleFontSize `json:"fontSize,omitempty"`
    FontWeight *string `json:"fontWeight,omitempty"`
    TextAnchor *GoogleCloudDocumentaiV1beta2DocumentTextAnchor `json:"textAnchor,omitempty"`
    TextDecoration *string `json:"textDecoration,omitempty"`
    TextStyle *string `json:"textStyle,omitempty"`
    
}

