import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Parameters for Google Play Campaign Measurements. [Learn more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)
**/
export declare class GooglePlayAnalytics extends SpeakeasyBase {
    gclid?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmMedium?: string;
    utmSource?: string;
    utmTerm?: string;
}
