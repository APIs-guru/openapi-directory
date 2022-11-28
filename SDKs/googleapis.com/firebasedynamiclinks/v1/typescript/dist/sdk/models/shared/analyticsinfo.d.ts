import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePlayAnalytics } from "./googleplayanalytics";
import { ITunesConnectAnalytics } from "./itunesconnectanalytics";
/**
 * Tracking parameters supported by Dynamic Link.
**/
export declare class AnalyticsInfo extends SpeakeasyBase {
    googlePlayAnalytics?: GooglePlayAnalytics;
    itunesConnectAnalytics?: ITunesConnectAnalytics;
}
