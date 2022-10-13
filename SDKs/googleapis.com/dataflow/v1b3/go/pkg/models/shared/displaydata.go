package shared

type DisplayData struct {
	BoolValue      *bool    `json:"boolValue"`
	DurationValue  *string  `json:"durationValue"`
	FloatValue     *float32 `json:"floatValue"`
	Int64Value     *string  `json:"int64Value"`
	JavaClassValue *string  `json:"javaClassValue"`
	Key            *string  `json:"key"`
	Label          *string  `json:"label"`
	Namespace      *string  `json:"namespace"`
	ShortStrValue  *string  `json:"shortStrValue"`
	StrValue       *string  `json:"strValue"`
	TimestampValue *string  `json:"timestampValue"`
	URL            *string  `json:"url"`
}
