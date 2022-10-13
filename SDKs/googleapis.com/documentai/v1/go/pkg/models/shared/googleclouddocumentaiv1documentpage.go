package shared

type GoogleCloudDocumentaiV1DocumentPage struct {
	Blocks             []GoogleCloudDocumentaiV1DocumentPageBlock             `json:"blocks"`
	DetectedBarcodes   []GoogleCloudDocumentaiV1DocumentPageDetectedBarcode   `json:"detectedBarcodes"`
	DetectedLanguages  []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage  `json:"detectedLanguages"`
	Dimension          *GoogleCloudDocumentaiV1DocumentPageDimension          `json:"dimension"`
	FormFields         []GoogleCloudDocumentaiV1DocumentPageFormField         `json:"formFields"`
	Image              *GoogleCloudDocumentaiV1DocumentPageImage              `json:"image"`
	ImageQualityScores *GoogleCloudDocumentaiV1DocumentPageImageQualityScores `json:"imageQualityScores"`
	Layout             *GoogleCloudDocumentaiV1DocumentPageLayout             `json:"layout"`
	Lines              []GoogleCloudDocumentaiV1DocumentPageLine              `json:"lines"`
	PageNumber         *int32                                                 `json:"pageNumber"`
	Paragraphs         []GoogleCloudDocumentaiV1DocumentPageParagraph         `json:"paragraphs"`
	Provenance         *GoogleCloudDocumentaiV1DocumentProvenance             `json:"provenance"`
	Symbols            []GoogleCloudDocumentaiV1DocumentPageSymbol            `json:"symbols"`
	Tables             []GoogleCloudDocumentaiV1DocumentPageTable             `json:"tables"`
	Tokens             []GoogleCloudDocumentaiV1DocumentPageToken             `json:"tokens"`
	Transforms         []GoogleCloudDocumentaiV1DocumentPageMatrix            `json:"transforms"`
	VisualElements     []GoogleCloudDocumentaiV1DocumentPageVisualElement     `json:"visualElements"`
}
