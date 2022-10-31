package shared

type GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum string

const (
	GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnumLayoutTypeUnspecified GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum = "LAYOUT_TYPE_UNSPECIFIED"
	GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnumBlock                 GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum = "BLOCK"
	GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnumParagraph             GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum = "PARAGRAPH"
	GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnumLine                  GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum = "LINE"
	GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnumToken                 GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum = "TOKEN"
	GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnumVisualElement         GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum = "VISUAL_ELEMENT"
	GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnumTable                 GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum = "TABLE"
	GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnumFormField             GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum = "FORM_FIELD"
)

type GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRef struct {
	BoundingPoly *GoogleCloudDocumentaiV1beta3BoundingPoly                            `json:"boundingPoly,omitempty"`
	Confidence   *float32                                                             `json:"confidence,omitempty"`
	LayoutID     *string                                                              `json:"layoutId,omitempty"`
	LayoutType   *GoogleCloudDocumentaiV1beta3DocumentPageAnchorPageRefLayoutTypeEnum `json:"layoutType,omitempty"`
	Page         *string                                                              `json:"page,omitempty"`
}
