package shared

type EscalationReasonEnum string

const (
	EscalationReasonEnumReasonUnspecified  EscalationReasonEnum = "REASON_UNSPECIFIED"
	EscalationReasonEnumResolutionTime     EscalationReasonEnum = "RESOLUTION_TIME"
	EscalationReasonEnumTechnicalExpertise EscalationReasonEnum = "TECHNICAL_EXPERTISE"
	EscalationReasonEnumBusinessImpact     EscalationReasonEnum = "BUSINESS_IMPACT"
)

type Escalation struct {
	Justification *string               `json:"justification"`
	Reason        *EscalationReasonEnum `json:"reason"`
}
