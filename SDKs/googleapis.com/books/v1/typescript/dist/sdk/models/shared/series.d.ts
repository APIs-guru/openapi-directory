import { SpeakeasyBase } from "../../../internal/utils";
export declare class SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo extends SpeakeasyBase {
    amountInMicros?: number;
    currencyCode?: string;
    releaseNumber?: string;
    releaseTime?: string;
}
export declare class SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo extends SpeakeasyBase {
    amountInMicros?: number;
    currencyCode?: string;
    releaseNumber?: string;
    releaseTime?: string;
}
export declare class SeriesSeriesSeriesSubscriptionReleaseInfo extends SpeakeasyBase {
    cancelTime?: string;
    currentReleaseInfo?: SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo;
    nextReleaseInfo?: SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo;
    seriesSubscriptionType?: string;
}
export declare class SeriesSeries extends SpeakeasyBase {
    bannerImageUrl?: string;
    eligibleForSubscription?: boolean;
    imageUrl?: string;
    isComplete?: boolean;
    seriesFormatType?: string;
    seriesId?: string;
    seriesSubscriptionReleaseInfo?: SeriesSeriesSeriesSubscriptionReleaseInfo;
    seriesType?: string;
    subscriptionId?: string;
    title?: string;
}
export declare class Series extends SpeakeasyBase {
    kind?: string;
    series?: SeriesSeries[];
}
