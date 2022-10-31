package shared



type GoogleCloudDocumentaiV1beta3DocumentPage struct {
    Blocks []GoogleCloudDocumentaiV1beta3DocumentPageBlock `json:"blocks,omitempty"`
    DetectedBarcodes []GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode `json:"detectedBarcodes,omitempty"`
    DetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
    Dimension *GoogleCloudDocumentaiV1beta3DocumentPageDimension `json:"dimension,omitempty"`
    FormFields []GoogleCloudDocumentaiV1beta3DocumentPageFormField `json:"formFields,omitempty"`
    Image *GoogleCloudDocumentaiV1beta3DocumentPageImage `json:"image,omitempty"`
    ImageQualityScores *GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores `json:"imageQualityScores,omitempty"`
    Layout *GoogleCloudDocumentaiV1beta3DocumentPageLayout `json:"layout,omitempty"`
    Lines []GoogleCloudDocumentaiV1beta3DocumentPageLine `json:"lines,omitempty"`
    PageNumber *int32 `json:"pageNumber,omitempty"`
    Paragraphs []GoogleCloudDocumentaiV1beta3DocumentPageParagraph `json:"paragraphs,omitempty"`
    Provenance *GoogleCloudDocumentaiV1beta3DocumentProvenance `json:"provenance,omitempty"`
    Symbols []GoogleCloudDocumentaiV1beta3DocumentPageSymbol `json:"symbols,omitempty"`
    Tables []GoogleCloudDocumentaiV1beta3DocumentPageTable `json:"tables,omitempty"`
    Tokens []GoogleCloudDocumentaiV1beta3DocumentPageToken `json:"tokens,omitempty"`
    Transforms []GoogleCloudDocumentaiV1beta3DocumentPageMatrix `json:"transforms,omitempty"`
    VisualElements []GoogleCloudDocumentaiV1beta3DocumentPageVisualElement `json:"visualElements,omitempty"`
    
}

