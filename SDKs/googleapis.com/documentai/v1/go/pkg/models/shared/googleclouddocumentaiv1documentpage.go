package shared

// GoogleCloudDocumentaiV1DocumentPage
// A page in a Document.
type GoogleCloudDocumentaiV1DocumentPage struct {
	Blocks             []GoogleCloudDocumentaiV1DocumentPageBlock             `json:"blocks,omitempty"`
	DetectedBarcodes   []GoogleCloudDocumentaiV1DocumentPageDetectedBarcode   `json:"detectedBarcodes,omitempty"`
	DetectedLanguages  []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage  `json:"detectedLanguages,omitempty"`
	Dimension          *GoogleCloudDocumentaiV1DocumentPageDimension          `json:"dimension,omitempty"`
	FormFields         []GoogleCloudDocumentaiV1DocumentPageFormField         `json:"formFields,omitempty"`
	Image              *GoogleCloudDocumentaiV1DocumentPageImage              `json:"image,omitempty"`
	ImageQualityScores *GoogleCloudDocumentaiV1DocumentPageImageQualityScores `json:"imageQualityScores,omitempty"`
	Layout             *GoogleCloudDocumentaiV1DocumentPageLayout             `json:"layout,omitempty"`
	Lines              []GoogleCloudDocumentaiV1DocumentPageLine              `json:"lines,omitempty"`
	PageNumber         *int32                                                 `json:"pageNumber,omitempty"`
	Paragraphs         []GoogleCloudDocumentaiV1DocumentPageParagraph         `json:"paragraphs,omitempty"`
	Provenance         *GoogleCloudDocumentaiV1DocumentProvenance             `json:"provenance,omitempty"`
	Symbols            []GoogleCloudDocumentaiV1DocumentPageSymbol            `json:"symbols,omitempty"`
	Tables             []GoogleCloudDocumentaiV1DocumentPageTable             `json:"tables,omitempty"`
	Tokens             []GoogleCloudDocumentaiV1DocumentPageToken             `json:"tokens,omitempty"`
	Transforms         []GoogleCloudDocumentaiV1DocumentPageMatrix            `json:"transforms,omitempty"`
	VisualElements     []GoogleCloudDocumentaiV1DocumentPageVisualElement     `json:"visualElements,omitempty"`
}
