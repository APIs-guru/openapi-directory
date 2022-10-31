package shared




type TestExecutionStateEnum string

const (
    TestExecutionStateEnumTestStateUnspecified TestExecutionStateEnum = "TEST_STATE_UNSPECIFIED"
TestExecutionStateEnumValidating TestExecutionStateEnum = "VALIDATING"
TestExecutionStateEnumPending TestExecutionStateEnum = "PENDING"
TestExecutionStateEnumRunning TestExecutionStateEnum = "RUNNING"
TestExecutionStateEnumFinished TestExecutionStateEnum = "FINISHED"
TestExecutionStateEnumError TestExecutionStateEnum = "ERROR"
TestExecutionStateEnumUnsupportedEnvironment TestExecutionStateEnum = "UNSUPPORTED_ENVIRONMENT"
TestExecutionStateEnumIncompatibleEnvironment TestExecutionStateEnum = "INCOMPATIBLE_ENVIRONMENT"
TestExecutionStateEnumIncompatibleArchitecture TestExecutionStateEnum = "INCOMPATIBLE_ARCHITECTURE"
TestExecutionStateEnumCancelled TestExecutionStateEnum = "CANCELLED"
TestExecutionStateEnumInvalid TestExecutionStateEnum = "INVALID"
)


type TestExecution struct {
    Environment *Environment `json:"environment,omitempty"`
    ID *string `json:"id,omitempty"`
    MatrixID *string `json:"matrixId,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    Shard *Shard `json:"shard,omitempty"`
    State *TestExecutionStateEnum `json:"state,omitempty"`
    TestDetails *TestDetails `json:"testDetails,omitempty"`
    TestSpecification *TestSpecification `json:"testSpecification,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    ToolResultsStep *ToolResultsStep `json:"toolResultsStep,omitempty"`
    
}

