package shared

type AnnotateTextRequestEncodingTypeEnum string

const (
	AnnotateTextRequestEncodingTypeEnumNone  AnnotateTextRequestEncodingTypeEnum = "NONE"
	AnnotateTextRequestEncodingTypeEnumUTF8  AnnotateTextRequestEncodingTypeEnum = "UTF8"
	AnnotateTextRequestEncodingTypeEnumUtf16 AnnotateTextRequestEncodingTypeEnum = "UTF16"
	AnnotateTextRequestEncodingTypeEnumUtf32 AnnotateTextRequestEncodingTypeEnum = "UTF32"
)

// AnnotateTextRequest
// The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call.
type AnnotateTextRequest struct {
	Document     *Document                            `json:"document,omitempty"`
	EncodingType *AnnotateTextRequestEncodingTypeEnum `json:"encodingType,omitempty"`
	Features     *Features                            `json:"features,omitempty"`
}
