package shared




type PolicyRepresentationDecisionStrategyEnum string

const (
    PolicyRepresentationDecisionStrategyEnumAffirmative PolicyRepresentationDecisionStrategyEnum = "AFFIRMATIVE"
PolicyRepresentationDecisionStrategyEnumUnanimous PolicyRepresentationDecisionStrategyEnum = "UNANIMOUS"
PolicyRepresentationDecisionStrategyEnumConsensus PolicyRepresentationDecisionStrategyEnum = "CONSENSUS"
)



type PolicyRepresentationLogicEnum string

const (
    PolicyRepresentationLogicEnumPositive PolicyRepresentationLogicEnum = "POSITIVE"
PolicyRepresentationLogicEnumNegative PolicyRepresentationLogicEnum = "NEGATIVE"
)


type PolicyRepresentation struct {
    Config map[string]interface{} `json:"config,omitempty"`
    DecisionStrategy *PolicyRepresentationDecisionStrategyEnum `json:"decisionStrategy,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    Logic *PolicyRepresentationLogicEnum `json:"logic,omitempty"`
    Name *string `json:"name,omitempty"`
    Owner *string `json:"owner,omitempty"`
    Policies []string `json:"policies,omitempty"`
    Resources []string `json:"resources,omitempty"`
    ResourcesData []ResourceRepresentation `json:"resourcesData,omitempty"`
    Scopes []string `json:"scopes,omitempty"`
    ScopesData []ScopeRepresentation `json:"scopesData,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

