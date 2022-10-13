package shared

type TestExecutionStateEnum string

const (
	TestExecutionStateEnumTestStateUnspecified     TestExecutionStateEnum = "TEST_STATE_UNSPECIFIED"
	TestExecutionStateEnumValidating               TestExecutionStateEnum = "VALIDATING"
	TestExecutionStateEnumPending                  TestExecutionStateEnum = "PENDING"
	TestExecutionStateEnumRunning                  TestExecutionStateEnum = "RUNNING"
	TestExecutionStateEnumFinished                 TestExecutionStateEnum = "FINISHED"
	TestExecutionStateEnumError                    TestExecutionStateEnum = "ERROR"
	TestExecutionStateEnumUnsupportedEnvironment   TestExecutionStateEnum = "UNSUPPORTED_ENVIRONMENT"
	TestExecutionStateEnumIncompatibleEnvironment  TestExecutionStateEnum = "INCOMPATIBLE_ENVIRONMENT"
	TestExecutionStateEnumIncompatibleArchitecture TestExecutionStateEnum = "INCOMPATIBLE_ARCHITECTURE"
	TestExecutionStateEnumCancelled                TestExecutionStateEnum = "CANCELLED"
	TestExecutionStateEnumInvalid                  TestExecutionStateEnum = "INVALID"
)

type TestExecution struct {
	Environment       *Environment            `json:"environment"`
	ID                *string                 `json:"id"`
	MatrixID          *string                 `json:"matrixId"`
	ProjectID         *string                 `json:"projectId"`
	Shard             *Shard                  `json:"shard"`
	State             *TestExecutionStateEnum `json:"state"`
	TestDetails       *TestDetails            `json:"testDetails"`
	TestSpecification *TestSpecification      `json:"testSpecification"`
	Timestamp         *string                 `json:"timestamp"`
	ToolResultsStep   *ToolResultsStep        `json:"toolResultsStep"`
}
