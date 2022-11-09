import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleMapsUnityClientInfo } from "./googlemapsunityclientinfo";
import { GoogleMapsPlayablelocationsV3Impression } from "./googlemapsplayablelocationsv3impression";


// GoogleMapsPlayablelocationsV3LogImpressionsRequest
/** 
 * A request for logging impressions.
**/
export class GoogleMapsPlayablelocationsV3LogImpressionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientInfo" })
  clientInfo?: GoogleMapsUnityClientInfo;

  @Metadata({ data: "json, name=impressions", elemType: shared.GoogleMapsPlayablelocationsV3Impression })
  impressions?: GoogleMapsPlayablelocationsV3Impression[];

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
