package shared

type CancelTestMatrixResponseTestStateEnum string

const (
	CancelTestMatrixResponseTestStateEnumTestStateUnspecified     CancelTestMatrixResponseTestStateEnum = "TEST_STATE_UNSPECIFIED"
	CancelTestMatrixResponseTestStateEnumValidating               CancelTestMatrixResponseTestStateEnum = "VALIDATING"
	CancelTestMatrixResponseTestStateEnumPending                  CancelTestMatrixResponseTestStateEnum = "PENDING"
	CancelTestMatrixResponseTestStateEnumRunning                  CancelTestMatrixResponseTestStateEnum = "RUNNING"
	CancelTestMatrixResponseTestStateEnumFinished                 CancelTestMatrixResponseTestStateEnum = "FINISHED"
	CancelTestMatrixResponseTestStateEnumError                    CancelTestMatrixResponseTestStateEnum = "ERROR"
	CancelTestMatrixResponseTestStateEnumUnsupportedEnvironment   CancelTestMatrixResponseTestStateEnum = "UNSUPPORTED_ENVIRONMENT"
	CancelTestMatrixResponseTestStateEnumIncompatibleEnvironment  CancelTestMatrixResponseTestStateEnum = "INCOMPATIBLE_ENVIRONMENT"
	CancelTestMatrixResponseTestStateEnumIncompatibleArchitecture CancelTestMatrixResponseTestStateEnum = "INCOMPATIBLE_ARCHITECTURE"
	CancelTestMatrixResponseTestStateEnumCancelled                CancelTestMatrixResponseTestStateEnum = "CANCELLED"
	CancelTestMatrixResponseTestStateEnumInvalid                  CancelTestMatrixResponseTestStateEnum = "INVALID"
)

// CancelTestMatrixResponse
// Response containing the current state of the specified test matrix.
type CancelTestMatrixResponse struct {
	TestState *CancelTestMatrixResponseTestStateEnum `json:"testState,omitempty"`
}
