import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsUnityClientInfo } from "./googlemapsunityclientinfo";
import { GoogleMapsPlayablelocationsV3Impression } from "./googlemapsplayablelocationsv3impression";
/**
 * A request for logging impressions.
**/
export declare class GoogleMapsPlayablelocationsV3LogImpressionsRequest extends SpeakeasyBase {
    clientInfo?: GoogleMapsUnityClientInfo;
    impressions?: GoogleMapsPlayablelocationsV3Impression[];
    requestId?: string;
}
