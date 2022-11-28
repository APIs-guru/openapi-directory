import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LocationListLocationTypeEnum {
    TargetingLocationTypeUnspecified = "TARGETING_LOCATION_TYPE_UNSPECIFIED",
    TargetingLocationTypeProximity = "TARGETING_LOCATION_TYPE_PROXIMITY",
    TargetingLocationTypeRegional = "TARGETING_LOCATION_TYPE_REGIONAL"
}


// LocationListInput
/** 
 * A list of locations used for targeting.
**/
export class LocationListInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=locationType" })
  locationType?: LocationListLocationTypeEnum;
}


// LocationList
/** 
 * A list of locations used for targeting.
**/
export class LocationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=locationListId" })
  locationListId?: string;

  @SpeakeasyMetadata({ data: "json, name=locationType" })
  locationType?: LocationListLocationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
