package shared

type GoogleCloudDocumentaiV1beta3DocumentStyle struct {
	BackgroundColor *GoogleTypeColor                                   `json:"backgroundColor"`
	Color           *GoogleTypeColor                                   `json:"color"`
	FontFamily      *string                                            `json:"fontFamily"`
	FontSize        *GoogleCloudDocumentaiV1beta3DocumentStyleFontSize `json:"fontSize"`
	FontWeight      *string                                            `json:"fontWeight"`
	TextAnchor      *GoogleCloudDocumentaiV1beta3DocumentTextAnchor    `json:"textAnchor"`
	TextDecoration  *string                                            `json:"textDecoration"`
	TextStyle       *string                                            `json:"textStyle"`
}
