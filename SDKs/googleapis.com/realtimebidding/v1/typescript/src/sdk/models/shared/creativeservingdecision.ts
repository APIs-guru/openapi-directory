import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdTechnologyProviders } from "./adtechnologyproviders";
import { PolicyCompliance } from "./policycompliance";
import { PolicyCompliance } from "./policycompliance";
import { AdvertiserAndBrand } from "./advertiserandbrand";
import { PolicyCompliance } from "./policycompliance";
import { PolicyCompliance } from "./policycompliance";
import { PolicyCompliance } from "./policycompliance";

export enum CreativeServingDecisionDetectedAttributesEnum {
    AttributeUnspecified = "ATTRIBUTE_UNSPECIFIED"
,    ImageRichMedia = "IMAGE_RICH_MEDIA"
,    AdobeFlashFlv = "ADOBE_FLASH_FLV"
,    IsTagged = "IS_TAGGED"
,    IsCookieTargeted = "IS_COOKIE_TARGETED"
,    IsUserInterestTargeted = "IS_USER_INTEREST_TARGETED"
,    ExpandingDirectionNone = "EXPANDING_DIRECTION_NONE"
,    ExpandingDirectionUp = "EXPANDING_DIRECTION_UP"
,    ExpandingDirectionDown = "EXPANDING_DIRECTION_DOWN"
,    ExpandingDirectionLeft = "EXPANDING_DIRECTION_LEFT"
,    ExpandingDirectionRight = "EXPANDING_DIRECTION_RIGHT"
,    ExpandingDirectionUpLeft = "EXPANDING_DIRECTION_UP_LEFT"
,    ExpandingDirectionUpRight = "EXPANDING_DIRECTION_UP_RIGHT"
,    ExpandingDirectionDownLeft = "EXPANDING_DIRECTION_DOWN_LEFT"
,    ExpandingDirectionDownRight = "EXPANDING_DIRECTION_DOWN_RIGHT"
,    CreativeTypeHtml = "CREATIVE_TYPE_HTML"
,    CreativeTypeVastVideo = "CREATIVE_TYPE_VAST_VIDEO"
,    ExpandingDirectionUpOrDown = "EXPANDING_DIRECTION_UP_OR_DOWN"
,    ExpandingDirectionLeftOrRight = "EXPANDING_DIRECTION_LEFT_OR_RIGHT"
,    ExpandingDirectionAnyDiagonal = "EXPANDING_DIRECTION_ANY_DIAGONAL"
,    ExpandingActionRolloverToExpand = "EXPANDING_ACTION_ROLLOVER_TO_EXPAND"
,    InstreamVastVideoTypeVpaidFlash = "INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH"
,    RichMediaCapabilityTypeMraid = "RICH_MEDIA_CAPABILITY_TYPE_MRAID"
,    RichMediaCapabilityTypeFlash = "RICH_MEDIA_CAPABILITY_TYPE_FLASH"
,    RichMediaCapabilityTypeHtml5 = "RICH_MEDIA_CAPABILITY_TYPE_HTML5"
,    SkippableInstreamVideo = "SKIPPABLE_INSTREAM_VIDEO"
,    RichMediaCapabilityTypeSsl = "RICH_MEDIA_CAPABILITY_TYPE_SSL"
,    RichMediaCapabilityTypeNonSsl = "RICH_MEDIA_CAPABILITY_TYPE_NON_SSL"
,    RichMediaCapabilityTypeInterstitial = "RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL"
,    NonSkippableInstreamVideo = "NON_SKIPPABLE_INSTREAM_VIDEO"
,    NativeEligibilityEligible = "NATIVE_ELIGIBILITY_ELIGIBLE"
,    NonVpaid = "NON_VPAID"
,    NativeEligibilityNotEligible = "NATIVE_ELIGIBILITY_NOT_ELIGIBLE"
,    AnyInterstitial = "ANY_INTERSTITIAL"
,    NonInterstitial = "NON_INTERSTITIAL"
,    InBannerVideo = "IN_BANNER_VIDEO"
,    RenderingSizelessAdx = "RENDERING_SIZELESS_ADX"
,    Omsdk10 = "OMSDK_1_0"
}


// CreativeServingDecision
/** 
 * Top level status and detected attributes of a creative.
**/
export class CreativeServingDecision extends SpeakeasyBase {
  @Metadata({ data: "json, name=adTechnologyProviders" })
  adTechnologyProviders?: AdTechnologyProviders;

  @Metadata({ data: "json, name=chinaPolicyCompliance" })
  chinaPolicyCompliance?: PolicyCompliance;

  @Metadata({ data: "json, name=dealsPolicyCompliance" })
  dealsPolicyCompliance?: PolicyCompliance;

  @Metadata({ data: "json, name=detectedAdvertisers", elemType: shared.AdvertiserAndBrand })
  detectedAdvertisers?: AdvertiserAndBrand[];

  @Metadata({ data: "json, name=detectedAttributes" })
  detectedAttributes?: CreativeServingDecisionDetectedAttributesEnum[];

  @Metadata({ data: "json, name=detectedClickThroughUrls" })
  detectedClickThroughUrls?: string[];

  @Metadata({ data: "json, name=detectedDomains" })
  detectedDomains?: string[];

  @Metadata({ data: "json, name=detectedLanguages" })
  detectedLanguages?: string[];

  @Metadata({ data: "json, name=detectedProductCategories" })
  detectedProductCategories?: number[];

  @Metadata({ data: "json, name=detectedSensitiveCategories" })
  detectedSensitiveCategories?: number[];

  @Metadata({ data: "json, name=detectedVendorIds" })
  detectedVendorIds?: number[];

  @Metadata({ data: "json, name=lastStatusUpdate" })
  lastStatusUpdate?: string;

  @Metadata({ data: "json, name=networkPolicyCompliance" })
  networkPolicyCompliance?: PolicyCompliance;

  @Metadata({ data: "json, name=platformPolicyCompliance" })
  platformPolicyCompliance?: PolicyCompliance;

  @Metadata({ data: "json, name=russiaPolicyCompliance" })
  russiaPolicyCompliance?: PolicyCompliance;
}
