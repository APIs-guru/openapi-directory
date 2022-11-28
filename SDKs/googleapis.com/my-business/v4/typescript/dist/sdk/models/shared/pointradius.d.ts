import { SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";
/**
 * A radius around a particular point (latitude/longitude).
**/
export declare class PointRadius extends SpeakeasyBase {
    latlng?: LatLng;
    radiusKm?: number;
}
