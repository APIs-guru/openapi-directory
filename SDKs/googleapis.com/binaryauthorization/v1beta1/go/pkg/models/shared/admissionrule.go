package shared

type AdmissionRuleEnforcementModeEnum string

const (
	AdmissionRuleEnforcementModeEnumEnforcementModeUnspecified AdmissionRuleEnforcementModeEnum = "ENFORCEMENT_MODE_UNSPECIFIED"
	AdmissionRuleEnforcementModeEnumEnforcedBlockAndAuditLog   AdmissionRuleEnforcementModeEnum = "ENFORCED_BLOCK_AND_AUDIT_LOG"
	AdmissionRuleEnforcementModeEnumDryrunAuditLogOnly         AdmissionRuleEnforcementModeEnum = "DRYRUN_AUDIT_LOG_ONLY"
)

type AdmissionRuleEvaluationModeEnum string

const (
	AdmissionRuleEvaluationModeEnumEvaluationModeUnspecified AdmissionRuleEvaluationModeEnum = "EVALUATION_MODE_UNSPECIFIED"
	AdmissionRuleEvaluationModeEnumAlwaysAllow               AdmissionRuleEvaluationModeEnum = "ALWAYS_ALLOW"
	AdmissionRuleEvaluationModeEnumRequireAttestation        AdmissionRuleEvaluationModeEnum = "REQUIRE_ATTESTATION"
	AdmissionRuleEvaluationModeEnumAlwaysDeny                AdmissionRuleEvaluationModeEnum = "ALWAYS_DENY"
)

// AdmissionRule
// An admission rule specifies either that all container images used in a pod creation request must be attested to by one or more attestors, that all pod creations will be allowed, or that all pod creations will be denied. Images matching an admission allowlist pattern are exempted from admission rules and will never block a pod creation.
type AdmissionRule struct {
	EnforcementMode       *AdmissionRuleEnforcementModeEnum `json:"enforcementMode,omitempty"`
	EvaluationMode        *AdmissionRuleEvaluationModeEnum  `json:"evaluationMode,omitempty"`
	RequireAttestationsBy []string                          `json:"requireAttestationsBy,omitempty"`
}
