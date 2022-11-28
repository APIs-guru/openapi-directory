package shared

type AnalyzeEntitiesRequestEncodingTypeEnum string

const (
	AnalyzeEntitiesRequestEncodingTypeEnumNone  AnalyzeEntitiesRequestEncodingTypeEnum = "NONE"
	AnalyzeEntitiesRequestEncodingTypeEnumUTF8  AnalyzeEntitiesRequestEncodingTypeEnum = "UTF8"
	AnalyzeEntitiesRequestEncodingTypeEnumUtf16 AnalyzeEntitiesRequestEncodingTypeEnum = "UTF16"
	AnalyzeEntitiesRequestEncodingTypeEnumUtf32 AnalyzeEntitiesRequestEncodingTypeEnum = "UTF32"
)

// AnalyzeEntitiesRequest
// The entity analysis request message.
type AnalyzeEntitiesRequest struct {
	Document     *Document                               `json:"document,omitempty"`
	EncodingType *AnalyzeEntitiesRequestEncodingTypeEnum `json:"encodingType,omitempty"`
}
