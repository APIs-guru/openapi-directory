package shared

type DuplicateAccessEnum string

const (
	DuplicateAccessEnumAccessUnspecified DuplicateAccessEnum = "ACCESS_UNSPECIFIED"
	DuplicateAccessEnumAccessUnknown     DuplicateAccessEnum = "ACCESS_UNKNOWN"
	DuplicateAccessEnumAllowed           DuplicateAccessEnum = "ALLOWED"
	DuplicateAccessEnumInsufficient      DuplicateAccessEnum = "INSUFFICIENT"
)

type Duplicate struct {
	Access       *DuplicateAccessEnum `json:"access"`
	LocationName *string              `json:"locationName"`
	PlaceID      *string              `json:"placeId"`
}
