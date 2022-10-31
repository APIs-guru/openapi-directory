package shared

type ErrorContext struct {
	HTTPRequest      *HTTPRequestContext `json:"httpRequest,omitempty"`
	ReportLocation   *SourceLocation     `json:"reportLocation,omitempty"`
	SourceReferences []SourceReference   `json:"sourceReferences,omitempty"`
	User             *string             `json:"user,omitempty"`
}
