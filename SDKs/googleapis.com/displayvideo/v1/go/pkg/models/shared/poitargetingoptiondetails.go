package shared

// PoiTargetingOptionDetails
// Represents a targetable point of interest(POI). This will be populated in the poi_details field when targeting_type is `TARGETING_TYPE_POI`.
type PoiTargetingOptionDetails struct {
	DisplayName *string  `json:"displayName,omitempty"`
	Latitude    *float64 `json:"latitude,omitempty"`
	Longitude   *float64 `json:"longitude,omitempty"`
}
