package shared

// SubExchangeTargetingOptionDetails
// Represents a targetable sub-exchange. This will be populated in the sub_exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.
type SubExchangeTargetingOptionDetails struct {
	DisplayName *string `json:"displayName,omitempty"`
}
