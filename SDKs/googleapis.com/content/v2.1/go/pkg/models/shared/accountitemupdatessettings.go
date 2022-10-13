package shared

type AccountItemUpdatesSettings struct {
	AllowAvailabilityUpdates       *bool `json:"allowAvailabilityUpdates"`
	AllowConditionUpdates          *bool `json:"allowConditionUpdates"`
	AllowPriceUpdates              *bool `json:"allowPriceUpdates"`
	AllowStrictAvailabilityUpdates *bool `json:"allowStrictAvailabilityUpdates"`
}
