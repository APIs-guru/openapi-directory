package shared

type GoogleCloudDocumentaiV1DocumentStyle struct {
	BackgroundColor *GoogleTypeColor                              `json:"backgroundColor"`
	Color           *GoogleTypeColor                              `json:"color"`
	FontFamily      *string                                       `json:"fontFamily"`
	FontSize        *GoogleCloudDocumentaiV1DocumentStyleFontSize `json:"fontSize"`
	FontWeight      *string                                       `json:"fontWeight"`
	TextAnchor      *GoogleCloudDocumentaiV1DocumentTextAnchor    `json:"textAnchor"`
	TextDecoration  *string                                       `json:"textDecoration"`
	TextStyle       *string                                       `json:"textStyle"`
}
