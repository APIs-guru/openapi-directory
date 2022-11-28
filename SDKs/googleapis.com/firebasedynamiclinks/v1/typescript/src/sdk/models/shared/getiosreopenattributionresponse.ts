import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetIosReopenAttributionResponse
/** 
 * Response for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
**/
export class GetIosReopenAttributionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deepLink" })
  deepLink?: string;

  @SpeakeasyMetadata({ data: "json, name=invitationId" })
  invitationId?: string;

  @SpeakeasyMetadata({ data: "json, name=iosMinAppVersion" })
  iosMinAppVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=resolvedLink" })
  resolvedLink?: string;

  @SpeakeasyMetadata({ data: "json, name=utmCampaign" })
  utmCampaign?: string;

  @SpeakeasyMetadata({ data: "json, name=utmContent" })
  utmContent?: string;

  @SpeakeasyMetadata({ data: "json, name=utmMedium" })
  utmMedium?: string;

  @SpeakeasyMetadata({ data: "json, name=utmSource" })
  utmSource?: string;

  @SpeakeasyMetadata({ data: "json, name=utmTerm" })
  utmTerm?: string;
}
