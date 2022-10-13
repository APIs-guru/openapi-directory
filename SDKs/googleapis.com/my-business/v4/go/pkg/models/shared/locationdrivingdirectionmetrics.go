package shared

type LocationDrivingDirectionMetrics struct {
	LocationName        *string               `json:"locationName"`
	TimeZone            *string               `json:"timeZone"`
	TopDirectionSources []TopDirectionSources `json:"topDirectionSources"`
}
