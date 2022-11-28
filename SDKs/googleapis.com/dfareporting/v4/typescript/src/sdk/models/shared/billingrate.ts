import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingRateTieredRate } from "./billingratetieredrate";


export enum BillingRateTypeEnum {
    AdServing = "AD_SERVING",
    Clicks = "CLICKS",
    MinimumService = "MINIMUM_SERVICE",
    PathToConversion = "PATH_TO_CONVERSION",
    RichMediaInpage = "RICH_MEDIA_INPAGE",
    RichMediaExpanding = "RICH_MEDIA_EXPANDING",
    RichMediaFloating = "RICH_MEDIA_FLOATING",
    RichMediaVideo = "RICH_MEDIA_VIDEO",
    RichMediaTeaser = "RICH_MEDIA_TEASER",
    RichMediaVpaid = "RICH_MEDIA_VPAID",
    InstreamVideo = "INSTREAM_VIDEO",
    Pixel = "PIXEL",
    Tracking = "TRACKING",
    TraffickingFeature = "TRAFFICKING_FEATURE",
    CustomReports = "CUSTOM_REPORTS",
    ExposureToConversion = "EXPOSURE_TO_CONVERSION",
    DataTransfer = "DATA_TRANSFER",
    DataTransferSetup = "DATA_TRANSFER_SETUP",
    Startup = "STARTUP",
    StatementOfWork = "STATEMENT_OF_WORK",
    ProvidedList = "PROVIDED_LIST",
    ProvidedListSetup = "PROVIDED_LIST_SETUP",
    EnhancedFormats = "ENHANCED_FORMATS",
    TrackingAdImpressions = "TRACKING_AD_IMPRESSIONS",
    TrackingAdClicks = "TRACKING_AD_CLICKS",
    NielsenDigitalAdRatingsFee = "NIELSEN_DIGITAL_AD_RATINGS_FEE",
    InstreamVideoRedirect = "INSTREAM_VIDEO_REDIRECT",
    InstreamVideoVpaid = "INSTREAM_VIDEO_VPAID",
    DisplayAdServing = "DISPLAY_AD_SERVING",
    VideoAdServing = "VIDEO_AD_SERVING",
    AudioAdServing = "AUDIO_AD_SERVING",
    AdvancedDisplayAdServing = "ADVANCED_DISPLAY_AD_SERVING"
}

export enum BillingRateUnitOfMeasureEnum {
    Cpm = "CPM",
    Cpc = "CPC",
    Ea = "EA",
    P2C = "P2C"
}


export class BillingRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rateInMicros" })
  rateInMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=tieredRates", elemType: BillingRateTieredRate })
  tieredRates?: BillingRateTieredRate[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: BillingRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=unitOfMeasure" })
  unitOfMeasure?: BillingRateUnitOfMeasureEnum;
}
