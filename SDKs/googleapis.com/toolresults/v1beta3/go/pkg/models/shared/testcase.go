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
	ElapsedTime       *Duration             `json:"elapsedTime"`
	EndTime           *Timestamp            `json:"endTime"`
	SkippedMessage    *string               `json:"skippedMessage"`
	StackTraces       []StackTrace          `json:"stackTraces"`
	StartTime         *Timestamp            `json:"startTime"`
	Status            *TestCaseStatusEnum   `json:"status"`
	TestCaseID        *string               `json:"testCaseId"`
	TestCaseReference *TestCaseReference    `json:"testCaseReference"`
	ToolOutputs       []ToolOutputReference `json:"toolOutputs"`
}
