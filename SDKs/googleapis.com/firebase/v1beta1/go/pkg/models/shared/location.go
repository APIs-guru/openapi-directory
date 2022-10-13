package shared

type LocationFeaturesEnum string

const (
	LocationFeaturesEnumLocationFeatureUnspecified LocationFeaturesEnum = "LOCATION_FEATURE_UNSPECIFIED"
	LocationFeaturesEnumFirestore                  LocationFeaturesEnum = "FIRESTORE"
	LocationFeaturesEnumDefaultStorage             LocationFeaturesEnum = "DEFAULT_STORAGE"
	LocationFeaturesEnumFunctions                  LocationFeaturesEnum = "FUNCTIONS"
)

type LocationTypeEnum string

const (
	LocationTypeEnumLocationTypeUnspecified LocationTypeEnum = "LOCATION_TYPE_UNSPECIFIED"
	LocationTypeEnumRegional                LocationTypeEnum = "REGIONAL"
	LocationTypeEnumMultiRegional           LocationTypeEnum = "MULTI_REGIONAL"
)

type Location struct {
	Features   []LocationFeaturesEnum `json:"features"`
	LocationID *string                `json:"locationId"`
	Type       *LocationTypeEnum      `json:"type"`
}
