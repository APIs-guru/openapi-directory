package shared




type GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum string

const (
    GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnumLogSourceUnspecified GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum = "LOG_SOURCE_UNSPECIFIED"
GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnumRecentAccesses GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum = "RECENT_ACCESSES"
)


type GoogleCloudPolicysimulatorV1beta1ReplayConfig struct {
    LogSource *GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum `json:"logSource,omitempty"`
    PolicyOverlay map[string]GoogleIamV1Policy `json:"policyOverlay,omitempty"`
    
}

