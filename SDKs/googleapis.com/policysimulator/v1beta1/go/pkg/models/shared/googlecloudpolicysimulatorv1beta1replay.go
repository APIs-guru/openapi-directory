package shared

type GoogleCloudPolicysimulatorV1beta1ReplayStateEnum string

const (
	GoogleCloudPolicysimulatorV1beta1ReplayStateEnumStateUnspecified GoogleCloudPolicysimulatorV1beta1ReplayStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1beta1ReplayStateEnumPending          GoogleCloudPolicysimulatorV1beta1ReplayStateEnum = "PENDING"
	GoogleCloudPolicysimulatorV1beta1ReplayStateEnumRunning          GoogleCloudPolicysimulatorV1beta1ReplayStateEnum = "RUNNING"
	GoogleCloudPolicysimulatorV1beta1ReplayStateEnumSucceeded        GoogleCloudPolicysimulatorV1beta1ReplayStateEnum = "SUCCEEDED"
	GoogleCloudPolicysimulatorV1beta1ReplayStateEnumFailed           GoogleCloudPolicysimulatorV1beta1ReplayStateEnum = "FAILED"
)

type GoogleCloudPolicysimulatorV1beta1Replay struct {
	Config         *GoogleCloudPolicysimulatorV1beta1ReplayConfig         `json:"config,omitempty"`
	Name           *string                                                `json:"name,omitempty"`
	ResultsSummary *GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary `json:"resultsSummary,omitempty"`
	State          *GoogleCloudPolicysimulatorV1beta1ReplayStateEnum      `json:"state,omitempty"`
}
