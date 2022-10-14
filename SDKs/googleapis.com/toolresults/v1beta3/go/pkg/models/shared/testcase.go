package shared

type TestCaseStatusEnum string

const (
	TestCaseStatusEnumPassed  TestCaseStatusEnum = "passed"
	TestCaseStatusEnumFailed  TestCaseStatusEnum = "failed"
	TestCaseStatusEnumError   TestCaseStatusEnum = "error"
	TestCaseStatusEnumSkipped TestCaseStatusEnum = "skipped"
	TestCaseStatusEnumFlaky   TestCaseStatusEnum = "flaky"
)

type TestCase struct {
	ElapsedTime       *Duration             `json:"elapsedTime,omitempty"`
	EndTime           *Timestamp            `json:"endTime,omitempty"`
	SkippedMessage    *string               `json:"skippedMessage,omitempty"`
	StackTraces       []StackTrace          `json:"stackTraces,omitempty"`
	StartTime         *Timestamp            `json:"startTime,omitempty"`
	Status            *TestCaseStatusEnum   `json:"status,omitempty"`
	TestCaseID        *string               `json:"testCaseId,omitempty"`
	TestCaseReference *TestCaseReference    `json:"testCaseReference,omitempty"`
	ToolOutputs       []ToolOutputReference `json:"toolOutputs,omitempty"`
}
