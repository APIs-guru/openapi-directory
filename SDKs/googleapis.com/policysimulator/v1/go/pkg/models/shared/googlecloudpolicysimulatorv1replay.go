package shared




type GoogleCloudPolicysimulatorV1ReplayStateEnum string

const (
    GoogleCloudPolicysimulatorV1ReplayStateEnumStateUnspecified GoogleCloudPolicysimulatorV1ReplayStateEnum = "STATE_UNSPECIFIED"
GoogleCloudPolicysimulatorV1ReplayStateEnumPending GoogleCloudPolicysimulatorV1ReplayStateEnum = "PENDING"
GoogleCloudPolicysimulatorV1ReplayStateEnumRunning GoogleCloudPolicysimulatorV1ReplayStateEnum = "RUNNING"
GoogleCloudPolicysimulatorV1ReplayStateEnumSucceeded GoogleCloudPolicysimulatorV1ReplayStateEnum = "SUCCEEDED"
GoogleCloudPolicysimulatorV1ReplayStateEnumFailed GoogleCloudPolicysimulatorV1ReplayStateEnum = "FAILED"
)


type GoogleCloudPolicysimulatorV1Replay struct {
    Config *GoogleCloudPolicysimulatorV1ReplayConfig `json:"config,omitempty"`
    Name *string `json:"name,omitempty"`
    ResultsSummary *GoogleCloudPolicysimulatorV1ReplayResultsSummary `json:"resultsSummary,omitempty"`
    State *GoogleCloudPolicysimulatorV1ReplayStateEnum `json:"state,omitempty"`
    
}

