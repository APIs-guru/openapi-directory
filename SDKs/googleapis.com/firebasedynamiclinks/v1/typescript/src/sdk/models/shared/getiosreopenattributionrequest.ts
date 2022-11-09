import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetIosReopenAttributionRequest
/** 
 * Request for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
**/
export class GetIosReopenAttributionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=requestedLink" })
  requestedLink?: string;

  @Metadata({ data: "json, name=sdkVersion" })
  sdkVersion?: string;
}
