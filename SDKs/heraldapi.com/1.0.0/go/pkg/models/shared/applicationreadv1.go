package shared

type ApplicationReadV1StatusEnum string

const (
	ApplicationReadV1StatusEnumIncomplete ApplicationReadV1StatusEnum = "incomplete"
	ApplicationReadV1StatusEnumComplete   ApplicationReadV1StatusEnum = "complete"
	ApplicationReadV1StatusEnumSubmitted  ApplicationReadV1StatusEnum = "submitted"
)

// ApplicationReadV1
// An application is a set of information submitted by a producer to institutions in order to get quotes.
type ApplicationReadV1 struct {
	CoverageValues []CoverageValueReadV1        `json:"coverage_values,omitempty"`
	ID             *string                      `json:"id,omitempty"`
	Products       []string                     `json:"products,omitempty"`
	RiskValues     []RiskValueReadV1            `json:"risk_values,omitempty"`
	Status         *ApplicationReadV1StatusEnum `json:"status,omitempty"`
}
