package shared

type AmendmentDecisionEnum string

const (
	AmendmentDecisionEnumNoDecision AmendmentDecisionEnum = "NoDecision"
	AmendmentDecisionEnumWithdrawn  AmendmentDecisionEnum = "Withdrawn"
	AmendmentDecisionEnumDisagreed  AmendmentDecisionEnum = "Disagreed"
	AmendmentDecisionEnumNotMoved   AmendmentDecisionEnum = "NotMoved"
	AmendmentDecisionEnumAgreed     AmendmentDecisionEnum = "Agreed"
)
