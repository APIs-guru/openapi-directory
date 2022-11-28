package shared

type GeoRegionTargetingOptionDetailsGeoRegionTypeEnum string

const (
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeUnknown               GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_UNKNOWN"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeOther                 GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_OTHER"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCountry               GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_COUNTRY"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeRegion                GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_REGION"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeTerritory             GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_TERRITORY"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeProvince              GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_PROVINCE"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeState                 GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_STATE"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypePrefecture            GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_PREFECTURE"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeGovernorate           GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_GOVERNORATE"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCanton                GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_CANTON"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeUnionTerritory        GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_UNION_TERRITORY"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeAutonomousCommunity   GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeDmaRegion             GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_DMA_REGION"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeMetro                 GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_METRO"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCongressionalDistrict GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCounty                GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_COUNTY"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeMunicipality          GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_MUNICIPALITY"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCity                  GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_CITY"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypePostalCode            GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_POSTAL_CODE"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeDepartment            GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_DEPARTMENT"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeAirport               GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_AIRPORT"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeTvRegion              GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_TV_REGION"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeOkrug                 GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_OKRUG"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeBorough               GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_BOROUGH"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCityRegion            GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_CITY_REGION"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeArrondissement        GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_ARRONDISSEMENT"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeNeighborhood          GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_NEIGHBORHOOD"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeUniversity            GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_UNIVERSITY"
	GeoRegionTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeDistrict              GeoRegionTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_DISTRICT"
)

// GeoRegionTargetingOptionDetails
// Represents a targetable geographic region. This will be populated in the geo_region_details field when targeting_type is `TARGETING_TYPE_GEO_REGION`.
type GeoRegionTargetingOptionDetails struct {
	DisplayName   *string                                           `json:"displayName,omitempty"`
	GeoRegionType *GeoRegionTargetingOptionDetailsGeoRegionTypeEnum `json:"geoRegionType,omitempty"`
}
