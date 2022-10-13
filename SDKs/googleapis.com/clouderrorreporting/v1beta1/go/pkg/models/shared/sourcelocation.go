package shared

type SourceLocation struct {
	FilePath     *string `json:"filePath"`
	FunctionName *string `json:"functionName"`
	LineNumber   *int32  `json:"lineNumber"`
}
