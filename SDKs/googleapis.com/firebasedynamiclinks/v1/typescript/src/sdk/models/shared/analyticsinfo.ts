import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayAnalytics } from "./googleplayanalytics";
import { ITunesConnectAnalytics } from "./itunesconnectanalytics";



// AnalyticsInfo
/** 
 * Tracking parameters supported by Dynamic Link.
**/
export class AnalyticsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googlePlayAnalytics" })
  googlePlayAnalytics?: GooglePlayAnalytics;

  @SpeakeasyMetadata({ data: "json, name=itunesConnectAnalytics" })
  itunesConnectAnalytics?: ITunesConnectAnalytics;
}
