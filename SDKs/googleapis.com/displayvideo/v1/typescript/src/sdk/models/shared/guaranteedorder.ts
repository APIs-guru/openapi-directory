import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GuaranteedOrderStatus } from "./guaranteedorderstatus";

export enum GuaranteedOrderExchangeEnum {
    ExchangeUnspecified = "EXCHANGE_UNSPECIFIED"
,    ExchangeGoogleAdManager = "EXCHANGE_GOOGLE_AD_MANAGER"
,    ExchangeAppnexus = "EXCHANGE_APPNEXUS"
,    ExchangeBrightroll = "EXCHANGE_BRIGHTROLL"
,    ExchangeAdform = "EXCHANGE_ADFORM"
,    ExchangeAdmeta = "EXCHANGE_ADMETA"
,    ExchangeAdmixer = "EXCHANGE_ADMIXER"
,    ExchangeAdsmogo = "EXCHANGE_ADSMOGO"
,    ExchangeAdswizz = "EXCHANGE_ADSWIZZ"
,    ExchangeBidswitch = "EXCHANGE_BIDSWITCH"
,    ExchangeBrightrollDisplay = "EXCHANGE_BRIGHTROLL_DISPLAY"
,    ExchangeCadreon = "EXCHANGE_CADREON"
,    ExchangeDailymotion = "EXCHANGE_DAILYMOTION"
,    ExchangeFive = "EXCHANGE_FIVE"
,    ExchangeFluct = "EXCHANGE_FLUCT"
,    ExchangeFreewheel = "EXCHANGE_FREEWHEEL"
,    ExchangeGeniee = "EXCHANGE_GENIEE"
,    ExchangeGumgum = "EXCHANGE_GUMGUM"
,    ExchangeImobile = "EXCHANGE_IMOBILE"
,    ExchangeIbillboard = "EXCHANGE_IBILLBOARD"
,    ExchangeImproveDigital = "EXCHANGE_IMPROVE_DIGITAL"
,    ExchangeIndex = "EXCHANGE_INDEX"
,    ExchangeKargo = "EXCHANGE_KARGO"
,    ExchangeMicroad = "EXCHANGE_MICROAD"
,    ExchangeMopub = "EXCHANGE_MOPUB"
,    ExchangeNend = "EXCHANGE_NEND"
,    ExchangeOneByAolDisplay = "EXCHANGE_ONE_BY_AOL_DISPLAY"
,    ExchangeOneByAolMobile = "EXCHANGE_ONE_BY_AOL_MOBILE"
,    ExchangeOneByAolVideo = "EXCHANGE_ONE_BY_AOL_VIDEO"
,    ExchangeOoyala = "EXCHANGE_OOYALA"
,    ExchangeOpenx = "EXCHANGE_OPENX"
,    ExchangePermodo = "EXCHANGE_PERMODO"
,    ExchangePlatformone = "EXCHANGE_PLATFORMONE"
,    ExchangePlatformid = "EXCHANGE_PLATFORMID"
,    ExchangePubmatic = "EXCHANGE_PUBMATIC"
,    ExchangePulsepoint = "EXCHANGE_PULSEPOINT"
,    ExchangeRevenuemax = "EXCHANGE_REVENUEMAX"
,    ExchangeRubicon = "EXCHANGE_RUBICON"
,    ExchangeSmartclip = "EXCHANGE_SMARTCLIP"
,    ExchangeSmartrtb = "EXCHANGE_SMARTRTB"
,    ExchangeSmartstreamtv = "EXCHANGE_SMARTSTREAMTV"
,    ExchangeSovrn = "EXCHANGE_SOVRN"
,    ExchangeSpotxchange = "EXCHANGE_SPOTXCHANGE"
,    ExchangeStroer = "EXCHANGE_STROER"
,    ExchangeTeadstv = "EXCHANGE_TEADSTV"
,    ExchangeTelaria = "EXCHANGE_TELARIA"
,    ExchangeTvn = "EXCHANGE_TVN"
,    ExchangeUnited = "EXCHANGE_UNITED"
,    ExchangeYieldlab = "EXCHANGE_YIELDLAB"
,    ExchangeYieldmo = "EXCHANGE_YIELDMO"
,    ExchangeUnrulyx = "EXCHANGE_UNRULYX"
,    ExchangeOpen8 = "EXCHANGE_OPEN8"
,    ExchangeTriton = "EXCHANGE_TRITON"
,    ExchangeTriplelift = "EXCHANGE_TRIPLELIFT"
,    ExchangeTaboola = "EXCHANGE_TABOOLA"
,    ExchangeInmobi = "EXCHANGE_INMOBI"
,    ExchangeSmaato = "EXCHANGE_SMAATO"
,    ExchangeAja = "EXCHANGE_AJA"
,    ExchangeSupership = "EXCHANGE_SUPERSHIP"
,    ExchangeNexstarDigital = "EXCHANGE_NEXSTAR_DIGITAL"
,    ExchangeWaze = "EXCHANGE_WAZE"
,    ExchangeSoundcast = "EXCHANGE_SOUNDCAST"
,    ExchangeSharethrough = "EXCHANGE_SHARETHROUGH"
,    ExchangeFyber = "EXCHANGE_FYBER"
,    ExchangeRedForPublishers = "EXCHANGE_RED_FOR_PUBLISHERS"
,    ExchangeMedianet = "EXCHANGE_MEDIANET"
,    ExchangeTapjoy = "EXCHANGE_TAPJOY"
,    ExchangeVistar = "EXCHANGE_VISTAR"
,    ExchangeDax = "EXCHANGE_DAX"
}


// GuaranteedOrder
/** 
 * A guaranteed order. Guaranteed orders are parent entity of guaranteed inventory sources. When creating a guaranteed inventory source, a guaranteed order ID must be assigned to the inventory source.
**/
export class GuaranteedOrder extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultAdvertiserId" })
  defaultAdvertiserId?: string;

  @Metadata({ data: "json, name=defaultCampaignId" })
  defaultCampaignId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=exchange" })
  exchange?: GuaranteedOrderExchangeEnum;

  @Metadata({ data: "json, name=guaranteedOrderId" })
  guaranteedOrderId?: string;

  @Metadata({ data: "json, name=legacyGuaranteedOrderId" })
  legacyGuaranteedOrderId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=publisherName" })
  publisherName?: string;

  @Metadata({ data: "json, name=readAccessInherited" })
  readAccessInherited?: boolean;

  @Metadata({ data: "json, name=readAdvertiserIds" })
  readAdvertiserIds?: string[];

  @Metadata({ data: "json, name=readWriteAdvertiserId" })
  readWriteAdvertiserId?: string;

  @Metadata({ data: "json, name=readWritePartnerId" })
  readWritePartnerId?: string;

  @Metadata({ data: "json, name=status" })
  status?: GuaranteedOrderStatus;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
