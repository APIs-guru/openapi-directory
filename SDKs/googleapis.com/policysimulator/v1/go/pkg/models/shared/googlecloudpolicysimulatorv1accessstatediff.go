package shared

type GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum string

const (
	GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnumAccessChangeTypeUnspecified GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum = "ACCESS_CHANGE_TYPE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnumNoChange                    GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum = "NO_CHANGE"
	GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnumUnknownChange               GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum = "UNKNOWN_CHANGE"
	GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnumAccessRevoked               GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum = "ACCESS_REVOKED"
	GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnumAccessGained                GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum = "ACCESS_GAINED"
	GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnumAccessMaybeRevoked          GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum = "ACCESS_MAYBE_REVOKED"
	GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnumAccessMaybeGained           GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum = "ACCESS_MAYBE_GAINED"
)

type GoogleCloudPolicysimulatorV1AccessStateDiff struct {
	AccessChange *GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum `json:"accessChange"`
	Baseline     *GoogleCloudPolicysimulatorV1ExplainedAccess                 `json:"baseline"`
	Simulated    *GoogleCloudPolicysimulatorV1ExplainedAccess                 `json:"simulated"`
}
