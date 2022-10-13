package shared

type ToolOutputReference struct {
	CreationTime *Timestamp         `json:"creationTime"`
	Output       *FileReference     `json:"output"`
	TestCase     *TestCaseReference `json:"testCase"`
}
