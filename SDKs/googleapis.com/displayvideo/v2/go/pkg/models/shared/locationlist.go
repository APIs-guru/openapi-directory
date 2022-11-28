package shared

type LocationListLocationTypeEnum string

const (
	LocationListLocationTypeEnumTargetingLocationTypeUnspecified LocationListLocationTypeEnum = "TARGETING_LOCATION_TYPE_UNSPECIFIED"
	LocationListLocationTypeEnumTargetingLocationTypeProximity   LocationListLocationTypeEnum = "TARGETING_LOCATION_TYPE_PROXIMITY"
	LocationListLocationTypeEnumTargetingLocationTypeRegional    LocationListLocationTypeEnum = "TARGETING_LOCATION_TYPE_REGIONAL"
)

// LocationListInput
// A list of locations used for targeting.
type LocationListInput struct {
	AdvertiserID *string                       `json:"advertiserId,omitempty"`
	DisplayName  *string                       `json:"displayName,omitempty"`
	LocationType *LocationListLocationTypeEnum `json:"locationType,omitempty"`
}

// LocationList
// A list of locations used for targeting.
type LocationList struct {
	AdvertiserID   *string                       `json:"advertiserId,omitempty"`
	DisplayName    *string                       `json:"displayName,omitempty"`
	LocationListID *string                       `json:"locationListId,omitempty"`
	LocationType   *LocationListLocationTypeEnum `json:"locationType,omitempty"`
	Name           *string                       `json:"name,omitempty"`
}
