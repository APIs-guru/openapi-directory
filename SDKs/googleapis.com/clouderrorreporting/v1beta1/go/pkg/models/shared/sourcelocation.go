package shared

type SourceLocation struct {
	FilePath     *string `json:"filePath,omitempty"`
	FunctionName *string `json:"functionName,omitempty"`
	LineNumber   *int32  `json:"lineNumber,omitempty"`
}
