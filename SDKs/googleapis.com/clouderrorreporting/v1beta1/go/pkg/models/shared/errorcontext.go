package shared

type ErrorContext struct {
	HTTPRequest      *HTTPRequestContext `json:"httpRequest"`
	ReportLocation   *SourceLocation     `json:"reportLocation"`
	SourceReferences []SourceReference   `json:"sourceReferences"`
	User             *string             `json:"user"`
}
