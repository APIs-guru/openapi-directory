import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeLatLng } from "./googletypelatlng";
/**
 * A geographical point suitable for placing game objects in location-based games.
**/
export declare class GoogleMapsPlayablelocationsV3SamplePlayableLocation extends SpeakeasyBase {
    centerPoint?: GoogleTypeLatLng;
    name?: string;
    placeId?: string;
    plusCode?: string;
    snappedPoint?: GoogleTypeLatLng;
    types?: string[];
}
