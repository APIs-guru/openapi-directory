import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LatLng } from "./latlng";

export enum LocationFilterTelecommutePreferenceEnum {
    TelecommutePreferenceUnspecified = "TELECOMMUTE_PREFERENCE_UNSPECIFIED"
,    TelecommuteExcluded = "TELECOMMUTE_EXCLUDED"
,    TelecommuteAllowed = "TELECOMMUTE_ALLOWED"
,    TelecommuteJobsExcluded = "TELECOMMUTE_JOBS_EXCLUDED"
}


// LocationFilter
/** 
 * Input only. Geographic region of the search.
**/
export class LocationFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=distanceInMiles" })
  distanceInMiles?: number;

  @Metadata({ data: "json, name=latLng" })
  latLng?: LatLng;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @Metadata({ data: "json, name=telecommutePreference" })
  telecommutePreference?: LocationFilterTelecommutePreferenceEnum;
}
