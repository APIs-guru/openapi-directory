package shared

type AccountItemUpdates struct {
	AccountItemUpdatesSettings              *AccountItemUpdatesSettings `json:"accountItemUpdatesSettings"`
	EffectiveAllowAvailabilityUpdates       *bool                       `json:"effectiveAllowAvailabilityUpdates"`
	EffectiveAllowConditionUpdates          *bool                       `json:"effectiveAllowConditionUpdates"`
	EffectiveAllowPriceUpdates              *bool                       `json:"effectiveAllowPriceUpdates"`
	EffectiveAllowStrictAvailabilityUpdates *bool                       `json:"effectiveAllowStrictAvailabilityUpdates"`
}
