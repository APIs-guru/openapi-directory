package shared

type ServiceUpdateModel struct {
	Availability    *AvailabilityInputModel     `json:"availability,omitempty"`
	BookingInterval *int32                      `json:"bookingInterval,omitempty"`
	BookingLimit    *int32                      `json:"bookingLimit,omitempty"`
	Description     *string                     `json:"description,omitempty"`
	Duration        *int32                      `json:"duration,omitempty"`
	Fees            *ServiceFeesUpdateModel     `json:"fees,omitempty"`
	LocationID      *string                     `json:"locationId,omitempty"`
	MaxCapacity     *int32                      `json:"maxCapacity,omitempty"`
	MaxGroupSize    *int32                      `json:"maxGroupSize,omitempty"`
	MediaPageURL    *string                     `json:"mediaPageUrl,omitempty"`
	Name            *string                     `json:"name,omitempty"`
	Options         *ServiceOptionsUpdateModel  `json:"options,omitempty"`
	Public          *bool                       `json:"public,omitempty"`
	ServiceGroupID  *string                     `json:"serviceGroupId,omitempty"`
	Settings        *ServiceSettingsUpdateModel `json:"settings,omitempty"`
	Type            *string                     `json:"type,omitempty"`
}
