package shared

// ExchangeAssignedTargetingOptionDetails
// Details for assigned exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.
type ExchangeAssignedTargetingOptionDetails struct {
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}
