import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LocationListLocationTypeEnum {
    TargetingLocationTypeUnspecified = "TARGETING_LOCATION_TYPE_UNSPECIFIED"
,    TargetingLocationTypeProximity = "TARGETING_LOCATION_TYPE_PROXIMITY"
,    TargetingLocationTypeRegional = "TARGETING_LOCATION_TYPE_REGIONAL"
}


// LocationList
/** 
 * A list of locations used for targeting.
**/
export class LocationList extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=locationListId" })
  locationListId?: string;

  @Metadata({ data: "json, name=locationType" })
  locationType?: LocationListLocationTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
