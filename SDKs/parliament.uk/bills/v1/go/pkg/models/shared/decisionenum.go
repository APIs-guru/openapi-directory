package shared

type DecisionEnum string

const (
	DecisionEnumAll        DecisionEnum = "All"
	DecisionEnumNoDecision DecisionEnum = "NoDecision"
	DecisionEnumWithdrawn  DecisionEnum = "Withdrawn"
	DecisionEnumDisagreed  DecisionEnum = "Disagreed"
	DecisionEnumNotMoved   DecisionEnum = "NotMoved"
	DecisionEnumAgreed     DecisionEnum = "Agreed"
)
