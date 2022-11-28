package shared

type PolicyGlobalPolicyEvaluationModeEnum string

const (
	PolicyGlobalPolicyEvaluationModeEnumGlobalPolicyEvaluationModeUnspecified PolicyGlobalPolicyEvaluationModeEnum = "GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED"
	PolicyGlobalPolicyEvaluationModeEnumEnable                                PolicyGlobalPolicyEvaluationModeEnum = "ENABLE"
	PolicyGlobalPolicyEvaluationModeEnumDisable                               PolicyGlobalPolicyEvaluationModeEnum = "DISABLE"
)

// Policy
// A policy for container image binary authorization.
type Policy struct {
	AdmissionWhitelistPatterns             []AdmissionWhitelistPattern           `json:"admissionWhitelistPatterns,omitempty"`
	ClusterAdmissionRules                  map[string]AdmissionRule              `json:"clusterAdmissionRules,omitempty"`
	DefaultAdmissionRule                   *AdmissionRule                        `json:"defaultAdmissionRule,omitempty"`
	Description                            *string                               `json:"description,omitempty"`
	Etag                                   *string                               `json:"etag,omitempty"`
	GlobalPolicyEvaluationMode             *PolicyGlobalPolicyEvaluationModeEnum `json:"globalPolicyEvaluationMode,omitempty"`
	IstioServiceIdentityAdmissionRules     map[string]AdmissionRule              `json:"istioServiceIdentityAdmissionRules,omitempty"`
	KubernetesNamespaceAdmissionRules      map[string]AdmissionRule              `json:"kubernetesNamespaceAdmissionRules,omitempty"`
	KubernetesServiceAccountAdmissionRules map[string]AdmissionRule              `json:"kubernetesServiceAccountAdmissionRules,omitempty"`
	Name                                   *string                               `json:"name,omitempty"`
	UpdateTime                             *string                               `json:"updateTime,omitempty"`
}
