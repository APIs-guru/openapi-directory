import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePlayAnalytics
/** 
 * Parameters for Google Play Campaign Measurements. [Learn more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)
**/
export class GooglePlayAnalytics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gclid" })
  gclid?: string;

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
