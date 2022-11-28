import { SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";
/**
 * A rectangle in geographical coordinates.
**/
export declare class LatLngBounds extends SpeakeasyBase {
    northeast?: LatLng;
    southwest?: LatLng;
}
