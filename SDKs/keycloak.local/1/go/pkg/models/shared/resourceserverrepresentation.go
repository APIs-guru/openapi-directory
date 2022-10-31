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
	AllowRemoteResourceManagement *bool                                                  `json:"allowRemoteResourceManagement,omitempty"`
	ClientID                      *string                                                `json:"clientId,omitempty"`
	DecisionStrategy              *ResourceServerRepresentationDecisionStrategyEnum      `json:"decisionStrategy,omitempty"`
	ID                            *string                                                `json:"id,omitempty"`
	Name                          *string                                                `json:"name,omitempty"`
	Policies                      []PolicyRepresentation                                 `json:"policies,omitempty"`
	PolicyEnforcementMode         *ResourceServerRepresentationPolicyEnforcementModeEnum `json:"policyEnforcementMode,omitempty"`
	Resources                     []ResourceRepresentation                               `json:"resources,omitempty"`
	Scopes                        []ScopeRepresentation                                  `json:"scopes,omitempty"`
}
