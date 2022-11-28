import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeConfig } from "./creativeconfig";
import { RateDetails } from "./ratedetails";
import { InventorySourceAccessors } from "./inventorysourceaccessors";
import { InventorySourceStatus } from "./inventorysourcestatus";
import { TimeRange } from "./timerange";
import { InventorySourceStatusInput } from "./inventorysourcestatus";
export declare enum InventorySourceCommitmentEnum {
    InventorySourceCommitmentUnspecified = "INVENTORY_SOURCE_COMMITMENT_UNSPECIFIED",
    InventorySourceCommitmentGuaranteed = "INVENTORY_SOURCE_COMMITMENT_GUARANTEED",
    InventorySourceCommitmentNonGuaranteed = "INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED"
}
export declare enum InventorySourceDeliveryMethodEnum {
    InventorySourceDeliveryMethodUnspecified = "INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED",
    InventorySourceDeliveryMethodProgrammatic = "INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC",
    InventorySourceDeliveryMethodTag = "INVENTORY_SOURCE_DELIVERY_METHOD_TAG"
}
export declare enum InventorySourceExchangeEnum {
    ExchangeUnspecified = "EXCHANGE_UNSPECIFIED",
    ExchangeGoogleAdManager = "EXCHANGE_GOOGLE_AD_MANAGER",
    ExchangeAppnexus = "EXCHANGE_APPNEXUS",
    ExchangeBrightroll = "EXCHANGE_BRIGHTROLL",
    ExchangeAdform = "EXCHANGE_ADFORM",
    ExchangeAdmeta = "EXCHANGE_ADMETA",
    ExchangeAdmixer = "EXCHANGE_ADMIXER",
    ExchangeAdsmogo = "EXCHANGE_ADSMOGO",
    ExchangeAdswizz = "EXCHANGE_ADSWIZZ",
    ExchangeBidswitch = "EXCHANGE_BIDSWITCH",
    ExchangeBrightrollDisplay = "EXCHANGE_BRIGHTROLL_DISPLAY",
    ExchangeCadreon = "EXCHANGE_CADREON",
    ExchangeDailymotion = "EXCHANGE_DAILYMOTION",
    ExchangeFive = "EXCHANGE_FIVE",
    ExchangeFluct = "EXCHANGE_FLUCT",
    ExchangeFreewheel = "EXCHANGE_FREEWHEEL",
    ExchangeGeniee = "EXCHANGE_GENIEE",
    ExchangeGumgum = "EXCHANGE_GUMGUM",
    ExchangeImobile = "EXCHANGE_IMOBILE",
    ExchangeIbillboard = "EXCHANGE_IBILLBOARD",
    ExchangeImproveDigital = "EXCHANGE_IMPROVE_DIGITAL",
    ExchangeIndex = "EXCHANGE_INDEX",
    ExchangeKargo = "EXCHANGE_KARGO",
    ExchangeMicroad = "EXCHANGE_MICROAD",
    ExchangeMopub = "EXCHANGE_MOPUB",
    ExchangeNend = "EXCHANGE_NEND",
    ExchangeOneByAolDisplay = "EXCHANGE_ONE_BY_AOL_DISPLAY",
    ExchangeOneByAolMobile = "EXCHANGE_ONE_BY_AOL_MOBILE",
    ExchangeOneByAolVideo = "EXCHANGE_ONE_BY_AOL_VIDEO",
    ExchangeOoyala = "EXCHANGE_OOYALA",
    ExchangeOpenx = "EXCHANGE_OPENX",
    ExchangePermodo = "EXCHANGE_PERMODO",
    ExchangePlatformone = "EXCHANGE_PLATFORMONE",
    ExchangePlatformid = "EXCHANGE_PLATFORMID",
    ExchangePubmatic = "EXCHANGE_PUBMATIC",
    ExchangePulsepoint = "EXCHANGE_PULSEPOINT",
    ExchangeRevenuemax = "EXCHANGE_REVENUEMAX",
    ExchangeRubicon = "EXCHANGE_RUBICON",
    ExchangeSmartclip = "EXCHANGE_SMARTCLIP",
    ExchangeSmartrtb = "EXCHANGE_SMARTRTB",
    ExchangeSmartstreamtv = "EXCHANGE_SMARTSTREAMTV",
    ExchangeSovrn = "EXCHANGE_SOVRN",
    ExchangeSpotxchange = "EXCHANGE_SPOTXCHANGE",
    ExchangeStroer = "EXCHANGE_STROER",
    ExchangeTeadstv = "EXCHANGE_TEADSTV",
    ExchangeTelaria = "EXCHANGE_TELARIA",
    ExchangeTvn = "EXCHANGE_TVN",
    ExchangeUnited = "EXCHANGE_UNITED",
    ExchangeYieldlab = "EXCHANGE_YIELDLAB",
    ExchangeYieldmo = "EXCHANGE_YIELDMO",
    ExchangeUnrulyx = "EXCHANGE_UNRULYX",
    ExchangeOpen8 = "EXCHANGE_OPEN8",
    ExchangeTriton = "EXCHANGE_TRITON",
    ExchangeTriplelift = "EXCHANGE_TRIPLELIFT",
    ExchangeTaboola = "EXCHANGE_TABOOLA",
    ExchangeInmobi = "EXCHANGE_INMOBI",
    ExchangeSmaato = "EXCHANGE_SMAATO",
    ExchangeAja = "EXCHANGE_AJA",
    ExchangeSupership = "EXCHANGE_SUPERSHIP",
    ExchangeNexstarDigital = "EXCHANGE_NEXSTAR_DIGITAL",
    ExchangeWaze = "EXCHANGE_WAZE",
    ExchangeSoundcast = "EXCHANGE_SOUNDCAST",
    ExchangeSharethrough = "EXCHANGE_SHARETHROUGH",
    ExchangeFyber = "EXCHANGE_FYBER",
    ExchangeRedForPublishers = "EXCHANGE_RED_FOR_PUBLISHERS",
    ExchangeMedianet = "EXCHANGE_MEDIANET",
    ExchangeTapjoy = "EXCHANGE_TAPJOY",
    ExchangeVistar = "EXCHANGE_VISTAR",
    ExchangeDax = "EXCHANGE_DAX"
}
export declare enum InventorySourceInventorySourceProductTypeEnum {
    InventorySourceProductTypeUnspecified = "INVENTORY_SOURCE_PRODUCT_TYPE_UNSPECIFIED",
    PreferredDeal = "PREFERRED_DEAL",
    PrivateAuction = "PRIVATE_AUCTION",
    ProgrammaticGuaranteed = "PROGRAMMATIC_GUARANTEED",
    TagGuaranteed = "TAG_GUARANTEED",
    YoutubeReserve = "YOUTUBE_RESERVE",
    InstantReserve = "INSTANT_RESERVE",
    GuaranteedPackage = "GUARANTEED_PACKAGE",
    ProgrammaticTv = "PROGRAMMATIC_TV",
    AuctionPackage = "AUCTION_PACKAGE"
}
export declare enum InventorySourceInventorySourceTypeEnum {
    InventorySourceTypeUnspecified = "INVENTORY_SOURCE_TYPE_UNSPECIFIED",
    InventorySourceTypePrivate = "INVENTORY_SOURCE_TYPE_PRIVATE",
    InventorySourceTypeAuctionPackage = "INVENTORY_SOURCE_TYPE_AUCTION_PACKAGE"
}
/**
 * An inventory source.
**/
export declare class InventorySource extends SpeakeasyBase {
    commitment?: InventorySourceCommitmentEnum;
    creativeConfigs?: CreativeConfig[];
    dealId?: string;
    deliveryMethod?: InventorySourceDeliveryMethodEnum;
    displayName?: string;
    exchange?: InventorySourceExchangeEnum;
    guaranteedOrderId?: string;
    inventorySourceId?: string;
    inventorySourceProductType?: InventorySourceInventorySourceProductTypeEnum;
    inventorySourceType?: InventorySourceInventorySourceTypeEnum;
    name?: string;
    publisherName?: string;
    rateDetails?: RateDetails;
    readAdvertiserIds?: string[];
    readPartnerIds?: string[];
    readWriteAccessors?: InventorySourceAccessors;
    status?: InventorySourceStatus;
    subSitePropertyId?: string;
    timeRange?: TimeRange;
    updateTime?: string;
}
/**
 * An inventory source.
**/
export declare class InventorySourceInput extends SpeakeasyBase {
    commitment?: InventorySourceCommitmentEnum;
    creativeConfigs?: CreativeConfig[];
    dealId?: string;
    deliveryMethod?: InventorySourceDeliveryMethodEnum;
    displayName?: string;
    exchange?: InventorySourceExchangeEnum;
    guaranteedOrderId?: string;
    inventorySourceType?: InventorySourceInventorySourceTypeEnum;
    publisherName?: string;
    rateDetails?: RateDetails;
    readWriteAccessors?: InventorySourceAccessors;
    status?: InventorySourceStatusInput;
    subSitePropertyId?: string;
    timeRange?: TimeRange;
}
