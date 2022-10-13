package shared

type ScheduleUpdateModel struct {
	Availability    *AvailabilityInputModel `json:"availability"`
	BookingsPerSlot *int32                  `json:"bookingsPerSlot"`
	Interval        *int32                  `json:"interval"`
	LocationID      *string                 `json:"locationId"`
	Name            *string                 `json:"name"`
	ResourceGroupID *string                 `json:"resourceGroupId"`
	Type            *string                 `json:"type"`
}
