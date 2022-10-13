package shared

type LocationFilterTelecommutePreferenceEnum string

const (
	LocationFilterTelecommutePreferenceEnumTelecommutePreferenceUnspecified LocationFilterTelecommutePreferenceEnum = "TELECOMMUTE_PREFERENCE_UNSPECIFIED"
	LocationFilterTelecommutePreferenceEnumTelecommuteExcluded              LocationFilterTelecommutePreferenceEnum = "TELECOMMUTE_EXCLUDED"
	LocationFilterTelecommutePreferenceEnumTelecommuteAllowed               LocationFilterTelecommutePreferenceEnum = "TELECOMMUTE_ALLOWED"
	LocationFilterTelecommutePreferenceEnumTelecommuteJobsExcluded          LocationFilterTelecommutePreferenceEnum = "TELECOMMUTE_JOBS_EXCLUDED"
)

type LocationFilter struct {
	Address               *string                                  `json:"address"`
	DistanceInMiles       *float64                                 `json:"distanceInMiles"`
	LatLng                *LatLng                                  `json:"latLng"`
	RegionCode            *string                                  `json:"regionCode"`
	TelecommutePreference *LocationFilterTelecommutePreferenceEnum `json:"telecommutePreference"`
}
