import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
**/
export declare class GoogleTypeLatLng extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
}
