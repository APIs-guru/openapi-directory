package shared

type ResourceServerRepresentationDecisionStrategyEnum string

const (
	ResourceServerRepresentationDecisionStrategyEnumAffirmative ResourceServerRepresentationDecisionStrategyEnum = "AFFIRMATIVE"
	ResourceServerRepresentationDecisionStrategyEnumUnanimous   ResourceServerRepresentationDecisionStrategyEnum = "UNANIMOUS"
	ResourceServerRepresentationDecisionStrategyEnumConsensus   ResourceServerRepresentationDecisionStrategyEnum = "CONSENSUS"
)

type ResourceServerRepresentationPolicyEnforcementModeEnum string

const (
	ResourceServerRepresentationPolicyEnforcementModeEnumEnforcing  ResourceServerRepresentationPolicyEnforcementModeEnum = "ENFORCING"
	ResourceServerRepresentationPolicyEnforcementModeEnumPermissive ResourceServerRepresentationPolicyEnforcementModeEnum = "PERMISSIVE"
	ResourceServerRepresentationPolicyEnforcementModeEnumDisabled   ResourceServerRepresentationPolicyEnforcementModeEnum = "DISABLED"
)

type ResourceServerRepresentation struct {
	AllowRemoteResourceManagement *bool                                                  `json:"allowRemoteResourceManagement"`
	ClientID                      *string                                                `json:"clientId"`
	DecisionStrategy              *ResourceServerRepresentationDecisionStrategyEnum      `json:"decisionStrategy"`
	ID                            *string                                                `json:"id"`
	Name                          *string                                                `json:"name"`
	Policies                      []PolicyRepresentation                                 `json:"policies"`
	PolicyEnforcementMode         *ResourceServerRepresentationPolicyEnforcementModeEnum `json:"policyEnforcementMode"`
	Resources                     []ResourceRepresentation                               `json:"resources"`
	Scopes                        []ScopeRepresentation                                  `json:"scopes"`
}
