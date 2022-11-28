package shared

// GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse
//
//	Response for the SamplePlayableLocations method.
type GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse struct {
	LocationsPerGameObjectType map[string]GoogleMapsPlayablelocationsV3SamplePlayableLocationList `json:"locationsPerGameObjectType,omitempty"`
	TTL                        *string                                                            `json:"ttl,omitempty"`
}
