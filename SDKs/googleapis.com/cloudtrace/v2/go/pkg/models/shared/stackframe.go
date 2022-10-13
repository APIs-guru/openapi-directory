package shared

type StackFrame struct {
	ColumnNumber         *string            `json:"columnNumber"`
	FileName             *TruncatableString `json:"fileName"`
	FunctionName         *TruncatableString `json:"functionName"`
	LineNumber           *string            `json:"lineNumber"`
	LoadModule           *Module            `json:"loadModule"`
	OriginalFunctionName *TruncatableString `json:"originalFunctionName"`
	SourceVersion        *TruncatableString `json:"sourceVersion"`
}
