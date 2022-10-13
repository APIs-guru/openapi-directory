package shared

type AnnotateTextRequestEncodingTypeEnum string

const (
	AnnotateTextRequestEncodingTypeEnumNone  AnnotateTextRequestEncodingTypeEnum = "NONE"
	AnnotateTextRequestEncodingTypeEnumUTF8  AnnotateTextRequestEncodingTypeEnum = "UTF8"
	AnnotateTextRequestEncodingTypeEnumUtf16 AnnotateTextRequestEncodingTypeEnum = "UTF16"
	AnnotateTextRequestEncodingTypeEnumUtf32 AnnotateTextRequestEncodingTypeEnum = "UTF32"
)

type AnnotateTextRequest struct {
	Document     *Document                            `json:"document"`
	EncodingType *AnnotateTextRequestEncodingTypeEnum `json:"encodingType"`
	Features     *Features                            `json:"features"`
}
