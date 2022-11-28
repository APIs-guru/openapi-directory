import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Last known geolocation estimate of this object. Not guaranteed to be included in response.
**/
export declare class GeoCoords extends SpeakeasyBase {
    lat?: number;
    lng?: number;
    timeUpdated?: string;
}
/**
 * Last known geolocation estimate of this object. Not guaranteed to be included in response.
**/
export declare class GeoCoordsInput extends SpeakeasyBase {
    lat?: number;
    lng?: number;
}
