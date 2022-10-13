package shared

type PolicyGlobalPolicyEvaluationModeEnum string

const (
	PolicyGlobalPolicyEvaluationModeEnumGlobalPolicyEvaluationModeUnspecified PolicyGlobalPolicyEvaluationModeEnum = "GLOBAL_POLICY_EVALUATION_MODE_UNSPECIFIED"
	PolicyGlobalPolicyEvaluationModeEnumEnable                                PolicyGlobalPolicyEvaluationModeEnum = "ENABLE"
	PolicyGlobalPolicyEvaluationModeEnumDisable                               PolicyGlobalPolicyEvaluationModeEnum = "DISABLE"
)

type Policy struct {
	AdmissionWhitelistPatterns             []AdmissionWhitelistPattern           `json:"admissionWhitelistPatterns"`
	ClusterAdmissionRules                  map[string]AdmissionRule              `json:"clusterAdmissionRules"`
	DefaultAdmissionRule                   *AdmissionRule                        `json:"defaultAdmissionRule"`
	Description                            *string                               `json:"description"`
	Etag                                   *string                               `json:"etag"`
	GlobalPolicyEvaluationMode             *PolicyGlobalPolicyEvaluationModeEnum `json:"globalPolicyEvaluationMode"`
	IstioServiceIdentityAdmissionRules     map[string]AdmissionRule              `json:"istioServiceIdentityAdmissionRules"`
	KubernetesNamespaceAdmissionRules      map[string]AdmissionRule              `json:"kubernetesNamespaceAdmissionRules"`
	KubernetesServiceAccountAdmissionRules map[string]AdmissionRule              `json:"kubernetesServiceAccountAdmissionRules"`
	Name                                   *string                               `json:"name"`
	UpdateTime                             *string                               `json:"updateTime"`
}
