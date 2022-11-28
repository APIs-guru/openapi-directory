package shared

// GoogleCloudDocumentaiV1DocumentStyle
// Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
type GoogleCloudDocumentaiV1DocumentStyle struct {
	BackgroundColor *GoogleTypeColor                              `json:"backgroundColor,omitempty"`
	Color           *GoogleTypeColor                              `json:"color,omitempty"`
	FontFamily      *string                                       `json:"fontFamily,omitempty"`
	FontSize        *GoogleCloudDocumentaiV1DocumentStyleFontSize `json:"fontSize,omitempty"`
	FontWeight      *string                                       `json:"fontWeight,omitempty"`
	TextAnchor      *GoogleCloudDocumentaiV1DocumentTextAnchor    `json:"textAnchor,omitempty"`
	TextDecoration  *string                                       `json:"textDecoration,omitempty"`
	TextStyle       *string                                       `json:"textStyle,omitempty"`
}
