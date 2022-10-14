package shared

type GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse struct {
	LocationsPerGameObjectType map[string]GoogleMapsPlayablelocationsV3SamplePlayableLocationList `json:"locationsPerGameObjectType,omitempty"`
	TTL                        *string                                                            `json:"ttl,omitempty"`
}
