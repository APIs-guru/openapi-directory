package shared

type GoogleCloudDocumentaiV1beta2DocumentPage struct {
	Blocks             []GoogleCloudDocumentaiV1beta2DocumentPageBlock             `json:"blocks,omitempty"`
	DetectedBarcodes   []GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode   `json:"detectedBarcodes,omitempty"`
	DetectedLanguages  []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage  `json:"detectedLanguages,omitempty"`
	Dimension          *GoogleCloudDocumentaiV1beta2DocumentPageDimension          `json:"dimension,omitempty"`
	FormFields         []GoogleCloudDocumentaiV1beta2DocumentPageFormField         `json:"formFields,omitempty"`
	Image              *GoogleCloudDocumentaiV1beta2DocumentPageImage              `json:"image,omitempty"`
	ImageQualityScores *GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores `json:"imageQualityScores,omitempty"`
	Layout             *GoogleCloudDocumentaiV1beta2DocumentPageLayout             `json:"layout,omitempty"`
	Lines              []GoogleCloudDocumentaiV1beta2DocumentPageLine              `json:"lines,omitempty"`
	PageNumber         *int32                                                      `json:"pageNumber,omitempty"`
	Paragraphs         []GoogleCloudDocumentaiV1beta2DocumentPageParagraph         `json:"paragraphs,omitempty"`
	Provenance         *GoogleCloudDocumentaiV1beta2DocumentProvenance             `json:"provenance,omitempty"`
	Symbols            []GoogleCloudDocumentaiV1beta2DocumentPageSymbol            `json:"symbols,omitempty"`
	Tables             []GoogleCloudDocumentaiV1beta2DocumentPageTable             `json:"tables,omitempty"`
	Tokens             []GoogleCloudDocumentaiV1beta2DocumentPageToken             `json:"tokens,omitempty"`
	Transforms         []GoogleCloudDocumentaiV1beta2DocumentPageMatrix            `json:"transforms,omitempty"`
	VisualElements     []GoogleCloudDocumentaiV1beta2DocumentPageVisualElement     `json:"visualElements,omitempty"`
}
