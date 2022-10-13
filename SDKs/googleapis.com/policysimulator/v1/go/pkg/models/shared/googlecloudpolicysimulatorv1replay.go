package shared

type GoogleCloudPolicysimulatorV1ReplayStateEnum string

const (
	GoogleCloudPolicysimulatorV1ReplayStateEnumStateUnspecified GoogleCloudPolicysimulatorV1ReplayStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1ReplayStateEnumPending          GoogleCloudPolicysimulatorV1ReplayStateEnum = "PENDING"
	GoogleCloudPolicysimulatorV1ReplayStateEnumRunning          GoogleCloudPolicysimulatorV1ReplayStateEnum = "RUNNING"
	GoogleCloudPolicysimulatorV1ReplayStateEnumSucceeded        GoogleCloudPolicysimulatorV1ReplayStateEnum = "SUCCEEDED"
	GoogleCloudPolicysimulatorV1ReplayStateEnumFailed           GoogleCloudPolicysimulatorV1ReplayStateEnum = "FAILED"
)

type GoogleCloudPolicysimulatorV1Replay struct {
	Config         *GoogleCloudPolicysimulatorV1ReplayConfig         `json:"config"`
	Name           *string                                           `json:"name"`
	ResultsSummary *GoogleCloudPolicysimulatorV1ReplayResultsSummary `json:"resultsSummary"`
	State          *GoogleCloudPolicysimulatorV1ReplayStateEnum      `json:"state"`
}
