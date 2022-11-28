package shared

type LocationFilterTelecommutePreferenceEnum string

const (
	LocationFilterTelecommutePreferenceEnumTelecommutePreferenceUnspecified LocationFilterTelecommutePreferenceEnum = "TELECOMMUTE_PREFERENCE_UNSPECIFIED"
	LocationFilterTelecommutePreferenceEnumTelecommuteExcluded              LocationFilterTelecommutePreferenceEnum = "TELECOMMUTE_EXCLUDED"
	LocationFilterTelecommutePreferenceEnumTelecommuteAllowed               LocationFilterTelecommutePreferenceEnum = "TELECOMMUTE_ALLOWED"
	LocationFilterTelecommutePreferenceEnumTelecommuteJobsExcluded          LocationFilterTelecommutePreferenceEnum = "TELECOMMUTE_JOBS_EXCLUDED"
)

// LocationFilter
// Geographic region of the search.
type LocationFilter struct {
	Address               *string                                  `json:"address,omitempty"`
	DistanceInMiles       *float64                                 `json:"distanceInMiles,omitempty"`
	LatLng                *LatLng                                  `json:"latLng,omitempty"`
	RegionCode            *string                                  `json:"regionCode,omitempty"`
	TelecommutePreference *LocationFilterTelecommutePreferenceEnum `json:"telecommutePreference,omitempty"`
}
