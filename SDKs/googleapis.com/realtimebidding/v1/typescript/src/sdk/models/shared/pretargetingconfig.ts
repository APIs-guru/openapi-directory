import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppTargeting } from "./apptargeting";
import { NumericTargetingDimension } from "./numerictargetingdimension";
import { CreativeDimensions } from "./creativedimensions";
import { StringTargetingDimension } from "./stringtargetingdimension";
import { NumericTargetingDimension } from "./numerictargetingdimension";
import { NumericTargetingDimension } from "./numerictargetingdimension";
import { StringTargetingDimension } from "./stringtargetingdimension";

export enum PretargetingConfigAllowedUserTargetingModesEnum {
    UserTargetingModeUnspecified = "USER_TARGETING_MODE_UNSPECIFIED"
,    RemarketingAds = "REMARKETING_ADS"
,    InterestBasedTargeting = "INTEREST_BASED_TARGETING"
}

export enum PretargetingConfigIncludedEnvironmentsEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED"
,    App = "APP"
,    Web = "WEB"
}

export enum PretargetingConfigIncludedFormatsEnum {
    CreativeFormatUnspecified = "CREATIVE_FORMAT_UNSPECIFIED"
,    Html = "HTML"
,    Vast = "VAST"
,    Native = "NATIVE"
}

export enum PretargetingConfigIncludedPlatformsEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED"
,    PersonalComputer = "PERSONAL_COMPUTER"
,    Phone = "PHONE"
,    Tablet = "TABLET"
,    ConnectedTv = "CONNECTED_TV"
}

export enum PretargetingConfigIncludedUserIdTypesEnum {
    UserIdTypeUnspecified = "USER_ID_TYPE_UNSPECIFIED"
,    HostedMatchData = "HOSTED_MATCH_DATA"
,    GoogleCookie = "GOOGLE_COOKIE"
,    DeviceId = "DEVICE_ID"
}

export enum PretargetingConfigInterstitialTargetingEnum {
    InterstitialTargetingUnspecified = "INTERSTITIAL_TARGETING_UNSPECIFIED"
,    OnlyInterstitialRequests = "ONLY_INTERSTITIAL_REQUESTS"
,    OnlyNonInterstitialRequests = "ONLY_NON_INTERSTITIAL_REQUESTS"
}

export enum PretargetingConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Suspended = "SUSPENDED"
}


// PretargetingConfig
/** 
 * Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for.
**/
export class PretargetingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedUserTargetingModes" })
  allowedUserTargetingModes?: PretargetingConfigAllowedUserTargetingModesEnum[];

  @Metadata({ data: "json, name=appTargeting" })
  appTargeting?: AppTargeting;

  @Metadata({ data: "json, name=billingId" })
  billingId?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=excludedContentLabelIds" })
  excludedContentLabelIds?: string[];

  @Metadata({ data: "json, name=geoTargeting" })
  geoTargeting?: NumericTargetingDimension;

  @Metadata({ data: "json, name=includedCreativeDimensions", elemType: shared.CreativeDimensions })
  includedCreativeDimensions?: CreativeDimensions[];

  @Metadata({ data: "json, name=includedEnvironments" })
  includedEnvironments?: PretargetingConfigIncludedEnvironmentsEnum[];

  @Metadata({ data: "json, name=includedFormats" })
  includedFormats?: PretargetingConfigIncludedFormatsEnum[];

  @Metadata({ data: "json, name=includedLanguages" })
  includedLanguages?: string[];

  @Metadata({ data: "json, name=includedMobileOperatingSystemIds" })
  includedMobileOperatingSystemIds?: string[];

  @Metadata({ data: "json, name=includedPlatforms" })
  includedPlatforms?: PretargetingConfigIncludedPlatformsEnum[];

  @Metadata({ data: "json, name=includedUserIdTypes" })
  includedUserIdTypes?: PretargetingConfigIncludedUserIdTypesEnum[];

  @Metadata({ data: "json, name=interstitialTargeting" })
  interstitialTargeting?: PretargetingConfigInterstitialTargetingEnum;

  @Metadata({ data: "json, name=invalidGeoIds" })
  invalidGeoIds?: string[];

  @Metadata({ data: "json, name=maximumQps" })
  maximumQps?: string;

  @Metadata({ data: "json, name=minimumViewabilityDecile" })
  minimumViewabilityDecile?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=publisherTargeting" })
  publisherTargeting?: StringTargetingDimension;

  @Metadata({ data: "json, name=state" })
  state?: PretargetingConfigStateEnum;

  @Metadata({ data: "json, name=userListTargeting" })
  userListTargeting?: NumericTargetingDimension;

  @Metadata({ data: "json, name=verticalTargeting" })
  verticalTargeting?: NumericTargetingDimension;

  @Metadata({ data: "json, name=webTargeting" })
  webTargeting?: StringTargetingDimension;
}
