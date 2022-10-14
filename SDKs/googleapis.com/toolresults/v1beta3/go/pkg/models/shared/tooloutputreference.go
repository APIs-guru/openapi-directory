package shared

type ToolOutputReference struct {
	CreationTime *Timestamp         `json:"creationTime,omitempty"`
	Output       *FileReference     `json:"output,omitempty"`
	TestCase     *TestCaseReference `json:"testCase,omitempty"`
}
