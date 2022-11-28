package shared

type GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum string

const (
	GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnumLogSourceUnspecified GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum = "LOG_SOURCE_UNSPECIFIED"
	GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnumRecentAccesses       GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum = "RECENT_ACCESSES"
)

// GoogleCloudPolicysimulatorV1ReplayConfig
// The configuration used for a Replay.
type GoogleCloudPolicysimulatorV1ReplayConfig struct {
	LogSource     *GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum `json:"logSource,omitempty"`
	PolicyOverlay map[string]GoogleIamV1Policy                           `json:"policyOverlay,omitempty"`
}
