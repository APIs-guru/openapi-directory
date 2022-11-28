package shared

type GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum string

const (
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeUnknown               GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_UNKNOWN"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeOther                 GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_OTHER"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCountry               GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_COUNTRY"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeRegion                GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_REGION"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeTerritory             GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_TERRITORY"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeProvince              GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_PROVINCE"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeState                 GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_STATE"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypePrefecture            GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_PREFECTURE"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeGovernorate           GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_GOVERNORATE"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCanton                GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_CANTON"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeUnionTerritory        GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_UNION_TERRITORY"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeAutonomousCommunity   GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeDmaRegion             GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_DMA_REGION"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeMetro                 GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_METRO"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCongressionalDistrict GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCounty                GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_COUNTY"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeMunicipality          GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_MUNICIPALITY"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCity                  GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_CITY"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypePostalCode            GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_POSTAL_CODE"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeDepartment            GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_DEPARTMENT"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeAirport               GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_AIRPORT"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeTvRegion              GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_TV_REGION"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeOkrug                 GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_OKRUG"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeBorough               GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_BOROUGH"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCityRegion            GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_CITY_REGION"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeArrondissement        GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_ARRONDISSEMENT"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeNeighborhood          GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_NEIGHBORHOOD"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeUniversity            GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_UNIVERSITY"
	GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeDistrict              GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_DISTRICT"
)

// GeoRegionAssignedTargetingOptionDetailsInput
// Details for assigned geographic region targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GEO_REGION`.
type GeoRegionAssignedTargetingOptionDetailsInput struct {
	Negative          *bool   `json:"negative,omitempty"`
	TargetingOptionID *string `json:"targetingOptionId,omitempty"`
}

// GeoRegionAssignedTargetingOptionDetails
// Details for assigned geographic region targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GEO_REGION`.
type GeoRegionAssignedTargetingOptionDetails struct {
	DisplayName       *string                                                   `json:"displayName,omitempty"`
	GeoRegionType     *GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum `json:"geoRegionType,omitempty"`
	Negative          *bool                                                     `json:"negative,omitempty"`
	TargetingOptionID *string                                                   `json:"targetingOptionId,omitempty"`
}
