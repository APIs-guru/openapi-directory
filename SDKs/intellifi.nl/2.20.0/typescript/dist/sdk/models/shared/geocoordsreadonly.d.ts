import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Last known geolocation estimate of this object. Not guaranteed to be included in response.
**/
export declare class GeoCoordsReadOnly extends SpeakeasyBase {
    lat?: number;
    lng?: number;
    timeUpdated?: string;
}
