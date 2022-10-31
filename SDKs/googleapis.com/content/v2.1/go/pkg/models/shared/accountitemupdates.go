package shared



type AccountItemUpdates struct {
    AccountItemUpdatesSettings *AccountItemUpdatesSettings `json:"accountItemUpdatesSettings,omitempty"`
    EffectiveAllowAvailabilityUpdates *bool `json:"effectiveAllowAvailabilityUpdates,omitempty"`
    EffectiveAllowConditionUpdates *bool `json:"effectiveAllowConditionUpdates,omitempty"`
    EffectiveAllowPriceUpdates *bool `json:"effectiveAllowPriceUpdates,omitempty"`
    EffectiveAllowStrictAvailabilityUpdates *bool `json:"effectiveAllowStrictAvailabilityUpdates,omitempty"`
    
}

