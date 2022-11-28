import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountInMicros" })
  amountInMicros?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseNumber" })
  releaseNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseTime" })
  releaseTime?: string;
}


export class SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountInMicros" })
  amountInMicros?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseNumber" })
  releaseNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseTime" })
  releaseTime?: string;
}


export class SeriesSeriesSeriesSubscriptionReleaseInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelTime" })
  cancelTime?: string;

  @SpeakeasyMetadata({ data: "json, name=currentReleaseInfo" })
  currentReleaseInfo?: SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo;

  @SpeakeasyMetadata({ data: "json, name=nextReleaseInfo" })
  nextReleaseInfo?: SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo;

  @SpeakeasyMetadata({ data: "json, name=seriesSubscriptionType" })
  seriesSubscriptionType?: string;
}


export class SeriesSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bannerImageUrl" })
  bannerImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=eligibleForSubscription" })
  eligibleForSubscription?: boolean;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=isComplete" })
  isComplete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=seriesFormatType" })
  seriesFormatType?: string;

  @SpeakeasyMetadata({ data: "json, name=seriesId" })
  seriesId?: string;

  @SpeakeasyMetadata({ data: "json, name=seriesSubscriptionReleaseInfo" })
  seriesSubscriptionReleaseInfo?: SeriesSeriesSeriesSubscriptionReleaseInfo;

  @SpeakeasyMetadata({ data: "json, name=seriesType" })
  seriesType?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class Series extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=series", elemType: SeriesSeries })
  series?: SeriesSeries[];
}
