import { SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";
/**
 * A region with its associated request count.
**/
export declare class RegionCount extends SpeakeasyBase {
    count?: string;
    label?: string;
    latlng?: LatLng;
}
