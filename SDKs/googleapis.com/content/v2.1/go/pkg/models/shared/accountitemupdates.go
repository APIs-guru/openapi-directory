package shared

// AccountItemUpdatesInput
// Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
type AccountItemUpdatesInput struct {
	AccountItemUpdatesSettings *AccountItemUpdatesSettings `json:"accountItemUpdatesSettings,omitempty"`
}

// AccountItemUpdates
// Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.
type AccountItemUpdates struct {
	AccountItemUpdatesSettings              *AccountItemUpdatesSettings `json:"accountItemUpdatesSettings,omitempty"`
	EffectiveAllowAvailabilityUpdates       *bool                       `json:"effectiveAllowAvailabilityUpdates,omitempty"`
	EffectiveAllowConditionUpdates          *bool                       `json:"effectiveAllowConditionUpdates,omitempty"`
	EffectiveAllowPriceUpdates              *bool                       `json:"effectiveAllowPriceUpdates,omitempty"`
	EffectiveAllowStrictAvailabilityUpdates *bool                       `json:"effectiveAllowStrictAvailabilityUpdates,omitempty"`
}
