package shared

type GoogleCloudDocumentaiV1beta2DocumentStyle struct {
	BackgroundColor *GoogleTypeColor                                   `json:"backgroundColor"`
	Color           *GoogleTypeColor                                   `json:"color"`
	FontFamily      *string                                            `json:"fontFamily"`
	FontSize        *GoogleCloudDocumentaiV1beta2DocumentStyleFontSize `json:"fontSize"`
	FontWeight      *string                                            `json:"fontWeight"`
	TextAnchor      *GoogleCloudDocumentaiV1beta2DocumentTextAnchor    `json:"textAnchor"`
	TextDecoration  *string                                            `json:"textDecoration"`
	TextStyle       *string                                            `json:"textStyle"`
}
