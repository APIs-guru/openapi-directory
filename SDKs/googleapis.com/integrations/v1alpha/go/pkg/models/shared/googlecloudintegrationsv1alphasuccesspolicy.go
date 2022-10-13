package shared

type GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum string

const (
	GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnumFinalStateUnspecified GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum = "FINAL_STATE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnumSucceeded             GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum = "SUCCEEDED"
	GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnumSuspended             GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum = "SUSPENDED"
)

type GoogleCloudIntegrationsV1alphaSuccessPolicy struct {
	FinalState *GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum `json:"finalState"`
}
