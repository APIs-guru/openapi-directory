package shared

type ScheduleUpdateModel struct {
	Availability    *AvailabilityInputModel `json:"availability,omitempty"`
	BookingsPerSlot *int32                  `json:"bookingsPerSlot,omitempty"`
	Interval        *int32                  `json:"interval,omitempty"`
	LocationID      *string                 `json:"locationId,omitempty"`
	Name            *string                 `json:"name,omitempty"`
	ResourceGroupID *string                 `json:"resourceGroupId,omitempty"`
	Type            *string                 `json:"type,omitempty"`
}
