package shared

type DuplicateAccessEnum string

const (
	DuplicateAccessEnumAccessUnspecified DuplicateAccessEnum = "ACCESS_UNSPECIFIED"
	DuplicateAccessEnumAccessUnknown     DuplicateAccessEnum = "ACCESS_UNKNOWN"
	DuplicateAccessEnumAllowed           DuplicateAccessEnum = "ALLOWED"
	DuplicateAccessEnumInsufficient      DuplicateAccessEnum = "INSUFFICIENT"
)

// Duplicate
// Information about the location that this location duplicates.
type Duplicate struct {
	Access       *DuplicateAccessEnum `json:"access,omitempty"`
	LocationName *string              `json:"locationName,omitempty"`
	PlaceID      *string              `json:"placeId,omitempty"`
}
