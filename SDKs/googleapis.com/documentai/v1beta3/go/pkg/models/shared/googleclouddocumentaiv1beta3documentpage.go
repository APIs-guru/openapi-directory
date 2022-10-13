package shared

type GoogleCloudDocumentaiV1beta3DocumentPage struct {
	Blocks             []GoogleCloudDocumentaiV1beta3DocumentPageBlock             `json:"blocks"`
	DetectedBarcodes   []GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode   `json:"detectedBarcodes"`
	DetectedLanguages  []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage  `json:"detectedLanguages"`
	Dimension          *GoogleCloudDocumentaiV1beta3DocumentPageDimension          `json:"dimension"`
	FormFields         []GoogleCloudDocumentaiV1beta3DocumentPageFormField         `json:"formFields"`
	Image              *GoogleCloudDocumentaiV1beta3DocumentPageImage              `json:"image"`
	ImageQualityScores *GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores `json:"imageQualityScores"`
	Layout             *GoogleCloudDocumentaiV1beta3DocumentPageLayout             `json:"layout"`
	Lines              []GoogleCloudDocumentaiV1beta3DocumentPageLine              `json:"lines"`
	PageNumber         *int32                                                      `json:"pageNumber"`
	Paragraphs         []GoogleCloudDocumentaiV1beta3DocumentPageParagraph         `json:"paragraphs"`
	Provenance         *GoogleCloudDocumentaiV1beta3DocumentProvenance             `json:"provenance"`
	Symbols            []GoogleCloudDocumentaiV1beta3DocumentPageSymbol            `json:"symbols"`
	Tables             []GoogleCloudDocumentaiV1beta3DocumentPageTable             `json:"tables"`
	Tokens             []GoogleCloudDocumentaiV1beta3DocumentPageToken             `json:"tokens"`
	Transforms         []GoogleCloudDocumentaiV1beta3DocumentPageMatrix            `json:"transforms"`
	VisualElements     []GoogleCloudDocumentaiV1beta3DocumentPageVisualElement     `json:"visualElements"`
}
