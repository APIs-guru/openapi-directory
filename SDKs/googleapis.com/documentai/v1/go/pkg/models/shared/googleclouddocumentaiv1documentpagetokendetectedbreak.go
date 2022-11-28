package shared

type GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreakTypeEnum string

const (
	GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreakTypeEnumTypeUnspecified GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreakTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreakTypeEnumSpace           GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreakTypeEnum = "SPACE"
	GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreakTypeEnumWideSpace       GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreakTypeEnum = "WIDE_SPACE"
	GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreakTypeEnumHyphen          GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreakTypeEnum = "HYPHEN"
)

// GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak
// Detected break at the end of a Token.
type GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak struct {
	Type *GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreakTypeEnum `json:"type,omitempty"`
}
