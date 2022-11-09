import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePlayAnalytics
/** 
 * Parameters for Google Play Campaign Measurements. [Learn more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)
**/
export class GooglePlayAnalytics extends SpeakeasyBase {
  @Metadata({ data: "json, name=gclid" })
  gclid?: string;

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
