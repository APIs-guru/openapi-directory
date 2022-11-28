import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";


export enum LocationFilterTelecommutePreferenceEnum {
    TelecommutePreferenceUnspecified = "TELECOMMUTE_PREFERENCE_UNSPECIFIED",
    TelecommuteExcluded = "TELECOMMUTE_EXCLUDED",
    TelecommuteAllowed = "TELECOMMUTE_ALLOWED",
    TelecommuteJobsExcluded = "TELECOMMUTE_JOBS_EXCLUDED"
}


// LocationFilter
/** 
 * Input only. Geographic region of the search.
**/
export class LocationFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=distanceInMiles" })
  distanceInMiles?: number;

  @SpeakeasyMetadata({ data: "json, name=latLng" })
  latLng?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=telecommutePreference" })
  telecommutePreference?: LocationFilterTelecommutePreferenceEnum;
}
