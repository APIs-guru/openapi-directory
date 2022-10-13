package shared

type GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse struct {
	LocationsPerGameObjectType map[string]GoogleMapsPlayablelocationsV3SamplePlayableLocationList `json:"locationsPerGameObjectType"`
	TTL                        *string                                                            `json:"ttl"`
}
