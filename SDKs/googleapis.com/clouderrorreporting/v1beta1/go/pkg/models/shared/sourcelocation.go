package shared

// SourceLocation
// Indicates a location in the source code of the service for which errors are reported. `functionName` must be provided by the application when reporting an error, unless the error report contains a `message` with a supported exception stack trace. All fields are optional for the later case.
type SourceLocation struct {
	FilePath     *string `json:"filePath,omitempty"`
	FunctionName *string `json:"functionName,omitempty"`
	LineNumber   *int32  `json:"lineNumber,omitempty"`
}
