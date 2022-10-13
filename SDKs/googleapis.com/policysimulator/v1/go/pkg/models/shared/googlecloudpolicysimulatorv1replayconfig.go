package shared

type GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum string

const (
	GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnumLogSourceUnspecified GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum = "LOG_SOURCE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnumRecentAccesses       GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum = "RECENT_ACCESSES"
)

type GoogleCloudPolicysimulatorV1ReplayConfig struct {
	LogSource     *GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum `json:"logSource"`
	PolicyOverlay map[string]GoogleIamV1Policy                           `json:"policyOverlay"`
}
