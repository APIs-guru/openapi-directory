import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum {
    GeoRegionTypeUnknown = "GEO_REGION_TYPE_UNKNOWN",
    GeoRegionTypeOther = "GEO_REGION_TYPE_OTHER",
    GeoRegionTypeCountry = "GEO_REGION_TYPE_COUNTRY",
    GeoRegionTypeRegion = "GEO_REGION_TYPE_REGION",
    GeoRegionTypeTerritory = "GEO_REGION_TYPE_TERRITORY",
    GeoRegionTypeProvince = "GEO_REGION_TYPE_PROVINCE",
    GeoRegionTypeState = "GEO_REGION_TYPE_STATE",
    GeoRegionTypePrefecture = "GEO_REGION_TYPE_PREFECTURE",
    GeoRegionTypeGovernorate = "GEO_REGION_TYPE_GOVERNORATE",
    GeoRegionTypeCanton = "GEO_REGION_TYPE_CANTON",
    GeoRegionTypeUnionTerritory = "GEO_REGION_TYPE_UNION_TERRITORY",
    GeoRegionTypeAutonomousCommunity = "GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY",
    GeoRegionTypeDmaRegion = "GEO_REGION_TYPE_DMA_REGION",
    GeoRegionTypeMetro = "GEO_REGION_TYPE_METRO",
    GeoRegionTypeCongressionalDistrict = "GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT",
    GeoRegionTypeCounty = "GEO_REGION_TYPE_COUNTY",
    GeoRegionTypeMunicipality = "GEO_REGION_TYPE_MUNICIPALITY",
    GeoRegionTypeCity = "GEO_REGION_TYPE_CITY",
    GeoRegionTypePostalCode = "GEO_REGION_TYPE_POSTAL_CODE",
    GeoRegionTypeDepartment = "GEO_REGION_TYPE_DEPARTMENT",
    GeoRegionTypeAirport = "GEO_REGION_TYPE_AIRPORT",
    GeoRegionTypeTvRegion = "GEO_REGION_TYPE_TV_REGION",
    GeoRegionTypeOkrug = "GEO_REGION_TYPE_OKRUG",
    GeoRegionTypeBorough = "GEO_REGION_TYPE_BOROUGH",
    GeoRegionTypeCityRegion = "GEO_REGION_TYPE_CITY_REGION",
    GeoRegionTypeArrondissement = "GEO_REGION_TYPE_ARRONDISSEMENT",
    GeoRegionTypeNeighborhood = "GEO_REGION_TYPE_NEIGHBORHOOD",
    GeoRegionTypeUniversity = "GEO_REGION_TYPE_UNIVERSITY",
    GeoRegionTypeDistrict = "GEO_REGION_TYPE_DISTRICT"
}


// GeoRegionAssignedTargetingOptionDetailsInput
/** 
 * Details for assigned geographic region targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GEO_REGION`.
**/
export class GeoRegionAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=negative" })
  negative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}


// GeoRegionAssignedTargetingOptionDetails
/** 
 * Details for assigned geographic region targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GEO_REGION`.
**/
export class GeoRegionAssignedTargetingOptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=geoRegionType" })
  geoRegionType?: GeoRegionAssignedTargetingOptionDetailsGeoRegionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=negative" })
  negative?: boolean;

  @SpeakeasyMetadata({ data: "json, name=targetingOptionId" })
  targetingOptionId?: string;
}
