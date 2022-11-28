import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsUnityClientInfo } from "./googlemapsunityclientinfo";
import { GoogleMapsPlayablelocationsV3Impression } from "./googlemapsplayablelocationsv3impression";



// GoogleMapsPlayablelocationsV3LogImpressionsRequest
/** 
 * A request for logging impressions.
**/
export class GoogleMapsPlayablelocationsV3LogImpressionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientInfo" })
  clientInfo?: GoogleMapsUnityClientInfo;

  @SpeakeasyMetadata({ data: "json, name=impressions", elemType: GoogleMapsPlayablelocationsV3Impression })
  impressions?: GoogleMapsPlayablelocationsV3Impression[];

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
