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

// Location
// A GCP resource location that can be selected for a FirebaseProject.
type Location struct {
	Features   []LocationFeaturesEnum `json:"features,omitempty"`
	LocationID *string                `json:"locationId,omitempty"`
	Type       *LocationTypeEnum      `json:"type,omitempty"`
}
