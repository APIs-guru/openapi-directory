package shared

type AnalyzeSentimentRequestEncodingTypeEnum string

const (
	AnalyzeSentimentRequestEncodingTypeEnumNone  AnalyzeSentimentRequestEncodingTypeEnum = "NONE"
	AnalyzeSentimentRequestEncodingTypeEnumUTF8  AnalyzeSentimentRequestEncodingTypeEnum = "UTF8"
	AnalyzeSentimentRequestEncodingTypeEnumUtf16 AnalyzeSentimentRequestEncodingTypeEnum = "UTF16"
	AnalyzeSentimentRequestEncodingTypeEnumUtf32 AnalyzeSentimentRequestEncodingTypeEnum = "UTF32"
)

type AnalyzeSentimentRequest struct {
	Document     *Document                                `json:"document"`
	EncodingType *AnalyzeSentimentRequestEncodingTypeEnum `json:"encodingType"`
}
