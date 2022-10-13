package shared

type PolicyRepresentationDecisionStrategyEnum string

const (
	PolicyRepresentationDecisionStrategyEnumAffirmative PolicyRepresentationDecisionStrategyEnum = "AFFIRMATIVE"
	PolicyRepresentationDecisionStrategyEnumUnanimous   PolicyRepresentationDecisionStrategyEnum = "UNANIMOUS"
	PolicyRepresentationDecisionStrategyEnumConsensus   PolicyRepresentationDecisionStrategyEnum = "CONSENSUS"
)

type PolicyRepresentationLogicEnum string

const (
	PolicyRepresentationLogicEnumPositive PolicyRepresentationLogicEnum = "POSITIVE"
	PolicyRepresentationLogicEnumNegative PolicyRepresentationLogicEnum = "NEGATIVE"
)

type PolicyRepresentation struct {
	Config           map[string]interface{}                    `json:"config"`
	DecisionStrategy *PolicyRepresentationDecisionStrategyEnum `json:"decisionStrategy"`
	Description      *string                                   `json:"description"`
	ID               *string                                   `json:"id"`
	Logic            *PolicyRepresentationLogicEnum            `json:"logic"`
	Name             *string                                   `json:"name"`
	Owner            *string                                   `json:"owner"`
	Policies         []string                                  `json:"policies"`
	Resources        []string                                  `json:"resources"`
	ResourcesData    []ResourceRepresentation                  `json:"resourcesData"`
	Scopes           []string                                  `json:"scopes"`
	ScopesData       []ScopeRepresentation                     `json:"scopesData"`
	Type             *string                                   `json:"type"`
}
