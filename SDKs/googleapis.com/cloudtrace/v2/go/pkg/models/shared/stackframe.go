package shared

type StackFrame struct {
	ColumnNumber         *string            `json:"columnNumber,omitempty"`
	FileName             *TruncatableString `json:"fileName,omitempty"`
	FunctionName         *TruncatableString `json:"functionName,omitempty"`
	LineNumber           *string            `json:"lineNumber,omitempty"`
	LoadModule           *Module            `json:"loadModule,omitempty"`
	OriginalFunctionName *TruncatableString `json:"originalFunctionName,omitempty"`
	SourceVersion        *TruncatableString `json:"sourceVersion,omitempty"`
}
