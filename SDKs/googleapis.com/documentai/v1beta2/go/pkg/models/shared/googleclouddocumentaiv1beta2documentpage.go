package shared

type GoogleCloudDocumentaiV1beta2DocumentPage struct {
	Blocks             []GoogleCloudDocumentaiV1beta2DocumentPageBlock             `json:"blocks"`
	DetectedBarcodes   []GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode   `json:"detectedBarcodes"`
	DetectedLanguages  []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage  `json:"detectedLanguages"`
	Dimension          *GoogleCloudDocumentaiV1beta2DocumentPageDimension          `json:"dimension"`
	FormFields         []GoogleCloudDocumentaiV1beta2DocumentPageFormField         `json:"formFields"`
	Image              *GoogleCloudDocumentaiV1beta2DocumentPageImage              `json:"image"`
	ImageQualityScores *GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores `json:"imageQualityScores"`
	Layout             *GoogleCloudDocumentaiV1beta2DocumentPageLayout             `json:"layout"`
	Lines              []GoogleCloudDocumentaiV1beta2DocumentPageLine              `json:"lines"`
	PageNumber         *int32                                                      `json:"pageNumber"`
	Paragraphs         []GoogleCloudDocumentaiV1beta2DocumentPageParagraph         `json:"paragraphs"`
	Provenance         *GoogleCloudDocumentaiV1beta2DocumentProvenance             `json:"provenance"`
	Symbols            []GoogleCloudDocumentaiV1beta2DocumentPageSymbol            `json:"symbols"`
	Tables             []GoogleCloudDocumentaiV1beta2DocumentPageTable             `json:"tables"`
	Tokens             []GoogleCloudDocumentaiV1beta2DocumentPageToken             `json:"tokens"`
	Transforms         []GoogleCloudDocumentaiV1beta2DocumentPageMatrix            `json:"transforms"`
	VisualElements     []GoogleCloudDocumentaiV1beta2DocumentPageVisualElement     `json:"visualElements"`
}
