import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsUnityClientInfo } from "./googlemapsunityclientinfo";
import { GoogleMapsPlayablelocationsV3PlayerReport } from "./googlemapsplayablelocationsv3playerreport";



// GoogleMapsPlayablelocationsV3LogPlayerReportsRequest
/** 
 * A request for logging your player's bad location reports.
**/
export class GoogleMapsPlayablelocationsV3LogPlayerReportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientInfo" })
  clientInfo?: GoogleMapsUnityClientInfo;

  @SpeakeasyMetadata({ data: "json, name=playerReports", elemType: GoogleMapsPlayablelocationsV3PlayerReport })
  playerReports?: GoogleMapsPlayablelocationsV3PlayerReport[];

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
