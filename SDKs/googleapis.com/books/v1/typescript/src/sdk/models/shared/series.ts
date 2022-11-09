import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountInMicros" })
  amountInMicros?: number;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=releaseNumber" })
  releaseNumber?: string;

  @Metadata({ data: "json, name=releaseTime" })
  releaseTime?: string;
}


export class SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountInMicros" })
  amountInMicros?: number;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=releaseNumber" })
  releaseNumber?: string;

  @Metadata({ data: "json, name=releaseTime" })
  releaseTime?: string;
}


export class SeriesSeriesSeriesSubscriptionReleaseInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelTime" })
  cancelTime?: string;

  @Metadata({ data: "json, name=currentReleaseInfo" })
  currentReleaseInfo?: SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo;

  @Metadata({ data: "json, name=nextReleaseInfo" })
  nextReleaseInfo?: SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo;

  @Metadata({ data: "json, name=seriesSubscriptionType" })
  seriesSubscriptionType?: string;
}


export class SeriesSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=bannerImageUrl" })
  bannerImageUrl?: string;

  @Metadata({ data: "json, name=eligibleForSubscription" })
  eligibleForSubscription?: boolean;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=isComplete" })
  isComplete?: boolean;

  @Metadata({ data: "json, name=seriesFormatType" })
  seriesFormatType?: string;

  @Metadata({ data: "json, name=seriesId" })
  seriesId?: string;

  @Metadata({ data: "json, name=seriesSubscriptionReleaseInfo" })
  seriesSubscriptionReleaseInfo?: SeriesSeriesSeriesSubscriptionReleaseInfo;

  @Metadata({ data: "json, name=seriesType" })
  seriesType?: string;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class Series extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=series", elemType: shared.SeriesSeries })
  series?: SeriesSeries[];
}
