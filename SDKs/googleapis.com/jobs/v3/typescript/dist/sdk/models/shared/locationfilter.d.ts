import { SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";
export declare enum LocationFilterTelecommutePreferenceEnum {
    TelecommutePreferenceUnspecified = "TELECOMMUTE_PREFERENCE_UNSPECIFIED",
    TelecommuteExcluded = "TELECOMMUTE_EXCLUDED",
    TelecommuteAllowed = "TELECOMMUTE_ALLOWED",
    TelecommuteJobsExcluded = "TELECOMMUTE_JOBS_EXCLUDED"
}
/**
 * Input only. Geographic region of the search.
**/
export declare class LocationFilter extends SpeakeasyBase {
    address?: string;
    distanceInMiles?: number;
    latLng?: LatLng;
    regionCode?: string;
    telecommutePreference?: LocationFilterTelecommutePreferenceEnum;
}
