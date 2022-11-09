import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleMapsUnityClientInfo } from "./googlemapsunityclientinfo";
import { GoogleMapsPlayablelocationsV3PlayerReport } from "./googlemapsplayablelocationsv3playerreport";


// GoogleMapsPlayablelocationsV3LogPlayerReportsRequest
/** 
 * A request for logging your player's bad location reports.
**/
export class GoogleMapsPlayablelocationsV3LogPlayerReportsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientInfo" })
  clientInfo?: GoogleMapsUnityClientInfo;

  @Metadata({ data: "json, name=playerReports", elemType: shared.GoogleMapsPlayablelocationsV3PlayerReport })
  playerReports?: GoogleMapsPlayablelocationsV3PlayerReport[];

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
