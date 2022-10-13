package shared

type ValueMatcher struct {
	BoolMatch    *bool                  `json:"boolMatch"`
	DoubleMatch  *DoubleMatcher         `json:"doubleMatch"`
	ListMatch    *ListMatcher           `json:"listMatch"`
	NullMatch    map[string]interface{} `json:"nullMatch"`
	PresentMatch *bool                  `json:"presentMatch"`
	StringMatch  *StringMatcher         `json:"stringMatch"`
}
