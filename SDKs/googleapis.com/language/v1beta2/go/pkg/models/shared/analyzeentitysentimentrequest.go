package shared

type AnalyzeEntitySentimentRequestEncodingTypeEnum string

const (
	AnalyzeEntitySentimentRequestEncodingTypeEnumNone  AnalyzeEntitySentimentRequestEncodingTypeEnum = "NONE"
	AnalyzeEntitySentimentRequestEncodingTypeEnumUTF8  AnalyzeEntitySentimentRequestEncodingTypeEnum = "UTF8"
	AnalyzeEntitySentimentRequestEncodingTypeEnumUtf16 AnalyzeEntitySentimentRequestEncodingTypeEnum = "UTF16"
	AnalyzeEntitySentimentRequestEncodingTypeEnumUtf32 AnalyzeEntitySentimentRequestEncodingTypeEnum = "UTF32"
)

// AnalyzeEntitySentimentRequest
// The entity-level sentiment analysis request message.
type AnalyzeEntitySentimentRequest struct {
	Document     *Document                                      `json:"document,omitempty"`
	EncodingType *AnalyzeEntitySentimentRequestEncodingTypeEnum `json:"encodingType,omitempty"`
}
