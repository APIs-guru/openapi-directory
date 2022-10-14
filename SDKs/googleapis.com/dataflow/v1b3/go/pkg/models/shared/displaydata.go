package shared

type DisplayData struct {
	BoolValue      *bool    `json:"boolValue,omitempty"`
	DurationValue  *string  `json:"durationValue,omitempty"`
	FloatValue     *float32 `json:"floatValue,omitempty"`
	Int64Value     *string  `json:"int64Value,omitempty"`
	JavaClassValue *string  `json:"javaClassValue,omitempty"`
	Key            *string  `json:"key,omitempty"`
	Label          *string  `json:"label,omitempty"`
	Namespace      *string  `json:"namespace,omitempty"`
	ShortStrValue  *string  `json:"shortStrValue,omitempty"`
	StrValue       *string  `json:"strValue,omitempty"`
	TimestampValue *string  `json:"timestampValue,omitempty"`
	URL            *string  `json:"url,omitempty"`
}
