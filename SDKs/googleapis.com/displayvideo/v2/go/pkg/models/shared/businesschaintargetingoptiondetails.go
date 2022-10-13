package shared

type BusinessChainTargetingOptionDetailsGeoRegionTypeEnum string

const (
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeUnknown               BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_UNKNOWN"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeOther                 BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_OTHER"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCountry               BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_COUNTRY"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeRegion                BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_REGION"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeTerritory             BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_TERRITORY"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeProvince              BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_PROVINCE"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeState                 BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_STATE"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypePrefecture            BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_PREFECTURE"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeGovernorate           BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_GOVERNORATE"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCanton                BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_CANTON"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeUnionTerritory        BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_UNION_TERRITORY"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeAutonomousCommunity   BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeDmaRegion             BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_DMA_REGION"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeMetro                 BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_METRO"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCongressionalDistrict BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCounty                BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_COUNTY"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeMunicipality          BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_MUNICIPALITY"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCity                  BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_CITY"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypePostalCode            BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_POSTAL_CODE"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeDepartment            BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_DEPARTMENT"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeAirport               BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_AIRPORT"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeTvRegion              BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_TV_REGION"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeOkrug                 BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_OKRUG"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeBorough               BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_BOROUGH"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeCityRegion            BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_CITY_REGION"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeArrondissement        BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_ARRONDISSEMENT"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeNeighborhood          BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_NEIGHBORHOOD"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeUniversity            BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_UNIVERSITY"
	BusinessChainTargetingOptionDetailsGeoRegionTypeEnumGeoRegionTypeDistrict              BusinessChainTargetingOptionDetailsGeoRegionTypeEnum = "GEO_REGION_TYPE_DISTRICT"
)

type BusinessChainTargetingOptionDetails struct {
	BusinessChain *string                                               `json:"businessChain"`
	GeoRegion     *string                                               `json:"geoRegion"`
	GeoRegionType *BusinessChainTargetingOptionDetailsGeoRegionTypeEnum `json:"geoRegionType"`
}
