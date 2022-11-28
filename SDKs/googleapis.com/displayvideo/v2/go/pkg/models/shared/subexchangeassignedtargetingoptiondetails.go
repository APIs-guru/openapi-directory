package shared

// SubExchangeAssignedTargetingOptionDetails
// Details for assigned sub-exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.
type SubExchangeAssignedTargetingOptionDetails struct {
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}
