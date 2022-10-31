package shared



type MemberRestriction struct {
    Evaluation *RestrictionEvaluation `json:"evaluation,omitempty"`
    Query *string `json:"query,omitempty"`
    
}

