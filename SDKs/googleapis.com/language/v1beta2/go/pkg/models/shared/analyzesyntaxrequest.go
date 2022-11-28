package shared

type AnalyzeSyntaxRequestEncodingTypeEnum string

const (
	AnalyzeSyntaxRequestEncodingTypeEnumNone  AnalyzeSyntaxRequestEncodingTypeEnum = "NONE"
	AnalyzeSyntaxRequestEncodingTypeEnumUTF8  AnalyzeSyntaxRequestEncodingTypeEnum = "UTF8"
	AnalyzeSyntaxRequestEncodingTypeEnumUtf16 AnalyzeSyntaxRequestEncodingTypeEnum = "UTF16"
	AnalyzeSyntaxRequestEncodingTypeEnumUtf32 AnalyzeSyntaxRequestEncodingTypeEnum = "UTF32"
)

// AnalyzeSyntaxRequest
// The syntax analysis request message.
type AnalyzeSyntaxRequest struct {
	Document     *Document                             `json:"document,omitempty"`
	EncodingType *AnalyzeSyntaxRequestEncodingTypeEnum `json:"encodingType,omitempty"`
}
