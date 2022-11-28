package shared

// AccountItemUpdatesSettings
// Settings for the Automatic Item Updates.
type AccountItemUpdatesSettings struct {
	AllowAvailabilityUpdates       *bool `json:"allowAvailabilityUpdates,omitempty"`
	AllowConditionUpdates          *bool `json:"allowConditionUpdates,omitempty"`
	AllowPriceUpdates              *bool `json:"allowPriceUpdates,omitempty"`
	AllowStrictAvailabilityUpdates *bool `json:"allowStrictAvailabilityUpdates,omitempty"`
}
