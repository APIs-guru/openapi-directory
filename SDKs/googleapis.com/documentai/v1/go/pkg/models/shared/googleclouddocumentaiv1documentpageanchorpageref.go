package shared

type GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum string

const (
	GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnumLayoutTypeUnspecified GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum = "LAYOUT_TYPE_UNSPECIFIED"
	GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnumBlock                 GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum = "BLOCK"
	GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnumParagraph             GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum = "PARAGRAPH"
	GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnumLine                  GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum = "LINE"
	GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnumToken                 GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum = "TOKEN"
	GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnumVisualElement         GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum = "VISUAL_ELEMENT"
	GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnumTable                 GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum = "TABLE"
	GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnumFormField             GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum = "FORM_FIELD"
)

// GoogleCloudDocumentaiV1DocumentPageAnchorPageRef
// Represents a weak reference to a page element within a document.
type GoogleCloudDocumentaiV1DocumentPageAnchorPageRef struct {
	BoundingPoly *GoogleCloudDocumentaiV1BoundingPoly                            `json:"boundingPoly,omitempty"`
	Confidence   *float32                                                        `json:"confidence,omitempty"`
	LayoutID     *string                                                         `json:"layoutId,omitempty"`
	LayoutType   *GoogleCloudDocumentaiV1DocumentPageAnchorPageRefLayoutTypeEnum `json:"layoutType,omitempty"`
	Page         *string                                                         `json:"page,omitempty"`
}
