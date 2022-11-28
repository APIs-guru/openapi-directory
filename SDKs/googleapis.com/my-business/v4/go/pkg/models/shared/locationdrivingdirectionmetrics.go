package shared

// LocationDrivingDirectionMetrics
// A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region.
type LocationDrivingDirectionMetrics struct {
	LocationName        *string               `json:"locationName,omitempty"`
	TimeZone            *string               `json:"timeZone,omitempty"`
	TopDirectionSources []TopDirectionSources `json:"topDirectionSources,omitempty"`
}
