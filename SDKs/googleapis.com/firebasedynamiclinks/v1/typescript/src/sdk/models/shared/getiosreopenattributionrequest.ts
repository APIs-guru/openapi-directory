import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetIosReopenAttributionRequest
/** 
 * Request for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
**/
export class GetIosReopenAttributionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedLink" })
  requestedLink?: string;

  @SpeakeasyMetadata({ data: "json, name=sdkVersion" })
  sdkVersion?: string;
}
