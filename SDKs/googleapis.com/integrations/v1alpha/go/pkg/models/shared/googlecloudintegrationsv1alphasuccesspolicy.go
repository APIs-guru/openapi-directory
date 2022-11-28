package shared

type GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum string

const (
	GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnumFinalStateUnspecified GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum = "FINAL_STATE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnumSucceeded             GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum = "SUCCEEDED"
	GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnumSuspended             GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum = "SUSPENDED"
)

// GoogleCloudIntegrationsV1alphaSuccessPolicy
// Policy that dictates the behavior for the task after it completes successfully.
type GoogleCloudIntegrationsV1alphaSuccessPolicy struct {
	FinalState *GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum `json:"finalState,omitempty"`
}
