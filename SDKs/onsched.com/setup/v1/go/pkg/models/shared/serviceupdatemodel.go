package shared

type ServiceUpdateModel struct {
	Availability    *AvailabilityInputModel     `json:"availability"`
	BookingInterval *int32                      `json:"bookingInterval"`
	BookingLimit    *int32                      `json:"bookingLimit"`
	Description     *string                     `json:"description"`
	Duration        *int32                      `json:"duration"`
	Fees            *ServiceFeesUpdateModel     `json:"fees"`
	LocationID      *string                     `json:"locationId"`
	MaxCapacity     *int32                      `json:"maxCapacity"`
	MaxGroupSize    *int32                      `json:"maxGroupSize"`
	MediaPageURL    *string                     `json:"mediaPageUrl"`
	Name            *string                     `json:"name"`
	Options         *ServiceOptionsUpdateModel  `json:"options"`
	Public          *bool                       `json:"public"`
	ServiceGroupID  *string                     `json:"serviceGroupId"`
	Settings        *ServiceSettingsUpdateModel `json:"settings"`
	Type            *string                     `json:"type"`
}
