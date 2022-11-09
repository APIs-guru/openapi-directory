import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetIosReopenAttributionResponse
/** 
 * Response for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
**/
export class GetIosReopenAttributionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deepLink" })
  deepLink?: string;

  @Metadata({ data: "json, name=invitationId" })
  invitationId?: string;

  @Metadata({ data: "json, name=iosMinAppVersion" })
  iosMinAppVersion?: string;

  @Metadata({ data: "json, name=resolvedLink" })
  resolvedLink?: string;

  @Metadata({ data: "json, name=utmCampaign" })
  utmCampaign?: string;

  @Metadata({ data: "json, name=utmContent" })
  utmContent?: string;

  @Metadata({ data: "json, name=utmMedium" })
  utmMedium?: string;

  @Metadata({ data: "json, name=utmSource" })
  utmSource?: string;

  @Metadata({ data: "json, name=utmTerm" })
  utmTerm?: string;
}
