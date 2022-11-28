import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a targetable point of interest(POI). This will be populated in the poi_details field when targeting_type is `TARGETING_TYPE_POI`.
**/
export declare class PoiTargetingOptionDetails extends SpeakeasyBase {
    displayName?: string;
    latitude?: number;
    longitude?: number;
}
