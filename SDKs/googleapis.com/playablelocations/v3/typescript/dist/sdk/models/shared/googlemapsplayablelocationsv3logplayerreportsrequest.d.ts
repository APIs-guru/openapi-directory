import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsUnityClientInfo } from "./googlemapsunityclientinfo";
import { GoogleMapsPlayablelocationsV3PlayerReport } from "./googlemapsplayablelocationsv3playerreport";
/**
 * A request for logging your player's bad location reports.
**/
export declare class GoogleMapsPlayablelocationsV3LogPlayerReportsRequest extends SpeakeasyBase {
    clientInfo?: GoogleMapsUnityClientInfo;
    playerReports?: GoogleMapsPlayablelocationsV3PlayerReport[];
    requestId?: string;
}
