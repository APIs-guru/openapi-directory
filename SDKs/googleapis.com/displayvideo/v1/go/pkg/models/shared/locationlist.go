package shared

type LocationListLocationTypeEnum string

const (
	LocationListLocationTypeEnumTargetingLocationTypeUnspecified LocationListLocationTypeEnum = "TARGETING_LOCATION_TYPE_UNSPECIFIED"
	LocationListLocationTypeEnumTargetingLocationTypeProximity   LocationListLocationTypeEnum = "TARGETING_LOCATION_TYPE_PROXIMITY"
	LocationListLocationTypeEnumTargetingLocationTypeRegional    LocationListLocationTypeEnum = "TARGETING_LOCATION_TYPE_REGIONAL"
)

type LocationList struct {
	AdvertiserID   *string                       `json:"advertiserId"`
	DisplayName    *string                       `json:"displayName"`
	LocationListID *string                       `json:"locationListId"`
	LocationType   *LocationListLocationTypeEnum `json:"locationType"`
	Name           *string                       `json:"name"`
}
