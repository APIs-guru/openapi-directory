package shared

type PoiTargetingOptionDetails struct {
	DisplayName *string  `json:"displayName,omitempty"`
	Latitude    *float64 `json:"latitude,omitempty"`
	Longitude   *float64 `json:"longitude,omitempty"`
}
