import { SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";
/**
 * Rectangle determined by min and max `LatLng` pairs.
**/
export declare class GoogleCloudVisionV1p2beta1LatLongRect extends SpeakeasyBase {
    maxLatLng?: LatLng;
    minLatLng?: LatLng;
}
