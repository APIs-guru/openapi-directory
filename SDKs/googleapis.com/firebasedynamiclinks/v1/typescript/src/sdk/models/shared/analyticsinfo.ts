import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePlayAnalytics } from "./googleplayanalytics";
import { ITunesConnectAnalytics } from "./itunesconnectanalytics";


// AnalyticsInfo
/** 
 * Tracking parameters supported by Dynamic Link.
**/
export class AnalyticsInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=googlePlayAnalytics" })
  googlePlayAnalytics?: GooglePlayAnalytics;

  @Metadata({ data: "json, name=itunesConnectAnalytics" })
  itunesConnectAnalytics?: ITunesConnectAnalytics;
}
