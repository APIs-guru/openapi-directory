import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppTargeting } from "./apptargeting";
import { NumericTargetingDimension } from "./numerictargetingdimension";
import { CreativeDimensions } from "./creativedimensions";
import { StringTargetingDimension } from "./stringtargetingdimension";


export enum PretargetingConfigAllowedUserTargetingModesEnum {
    UserTargetingModeUnspecified = "USER_TARGETING_MODE_UNSPECIFIED",
    RemarketingAds = "REMARKETING_ADS",
    InterestBasedTargeting = "INTEREST_BASED_TARGETING"
}

export enum PretargetingConfigIncludedEnvironmentsEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    App = "APP",
    Web = "WEB"
}

export enum PretargetingConfigIncludedFormatsEnum {
    CreativeFormatUnspecified = "CREATIVE_FORMAT_UNSPECIFIED",
    Html = "HTML",
    Vast = "VAST",
    Native = "NATIVE"
}

export enum PretargetingConfigIncludedPlatformsEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    PersonalComputer = "PERSONAL_COMPUTER",
    Phone = "PHONE",
    Tablet = "TABLET",
    ConnectedTv = "CONNECTED_TV"
}

export enum PretargetingConfigIncludedUserIdTypesEnum {
    UserIdTypeUnspecified = "USER_ID_TYPE_UNSPECIFIED",
    HostedMatchData = "HOSTED_MATCH_DATA",
    GoogleCookie = "GOOGLE_COOKIE",
    DeviceId = "DEVICE_ID"
}

export enum PretargetingConfigInterstitialTargetingEnum {
    InterstitialTargetingUnspecified = "INTERSTITIAL_TARGETING_UNSPECIFIED",
    OnlyInterstitialRequests = "ONLY_INTERSTITIAL_REQUESTS",
    OnlyNonInterstitialRequests = "ONLY_NON_INTERSTITIAL_REQUESTS"
}

export enum PretargetingConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Suspended = "SUSPENDED"
}


// PretargetingConfig
/** 
 * Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for.
**/
export class PretargetingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedUserTargetingModes" })
  allowedUserTargetingModes?: PretargetingConfigAllowedUserTargetingModesEnum[];

  @SpeakeasyMetadata({ data: "json, name=appTargeting" })
  appTargeting?: AppTargeting;

  @SpeakeasyMetadata({ data: "json, name=billingId" })
  billingId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=excludedContentLabelIds" })
  excludedContentLabelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=geoTargeting" })
  geoTargeting?: NumericTargetingDimension;

  @SpeakeasyMetadata({ data: "json, name=includedCreativeDimensions", elemType: CreativeDimensions })
  includedCreativeDimensions?: CreativeDimensions[];

  @SpeakeasyMetadata({ data: "json, name=includedEnvironments" })
  includedEnvironments?: PretargetingConfigIncludedEnvironmentsEnum[];

  @SpeakeasyMetadata({ data: "json, name=includedFormats" })
  includedFormats?: PretargetingConfigIncludedFormatsEnum[];

  @SpeakeasyMetadata({ data: "json, name=includedLanguages" })
  includedLanguages?: string[];

  @SpeakeasyMetadata({ data: "json, name=includedMobileOperatingSystemIds" })
  includedMobileOperatingSystemIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=includedPlatforms" })
  includedPlatforms?: PretargetingConfigIncludedPlatformsEnum[];

  @SpeakeasyMetadata({ data: "json, name=includedUserIdTypes" })
  includedUserIdTypes?: PretargetingConfigIncludedUserIdTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=interstitialTargeting" })
  interstitialTargeting?: PretargetingConfigInterstitialTargetingEnum;

  @SpeakeasyMetadata({ data: "json, name=invalidGeoIds" })
  invalidGeoIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=maximumQps" })
  maximumQps?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumViewabilityDecile" })
  minimumViewabilityDecile?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=publisherTargeting" })
  publisherTargeting?: StringTargetingDimension;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: PretargetingConfigStateEnum;

  @SpeakeasyMetadata({ data: "json, name=userListTargeting" })
  userListTargeting?: NumericTargetingDimension;

  @SpeakeasyMetadata({ data: "json, name=verticalTargeting" })
  verticalTargeting?: NumericTargetingDimension;

  @SpeakeasyMetadata({ data: "json, name=webTargeting" })
  webTargeting?: StringTargetingDimension;
}


// PretargetingConfigInput
/** 
 * Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for.
**/
export class PretargetingConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedUserTargetingModes" })
  allowedUserTargetingModes?: PretargetingConfigAllowedUserTargetingModesEnum[];

  @SpeakeasyMetadata({ data: "json, name=appTargeting" })
  appTargeting?: AppTargeting;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=excludedContentLabelIds" })
  excludedContentLabelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=geoTargeting" })
  geoTargeting?: NumericTargetingDimension;

  @SpeakeasyMetadata({ data: "json, name=includedCreativeDimensions", elemType: CreativeDimensions })
  includedCreativeDimensions?: CreativeDimensions[];

  @SpeakeasyMetadata({ data: "json, name=includedEnvironments" })
  includedEnvironments?: PretargetingConfigIncludedEnvironmentsEnum[];

  @SpeakeasyMetadata({ data: "json, name=includedFormats" })
  includedFormats?: PretargetingConfigIncludedFormatsEnum[];

  @SpeakeasyMetadata({ data: "json, name=includedLanguages" })
  includedLanguages?: string[];

  @SpeakeasyMetadata({ data: "json, name=includedMobileOperatingSystemIds" })
  includedMobileOperatingSystemIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=includedPlatforms" })
  includedPlatforms?: PretargetingConfigIncludedPlatformsEnum[];

  @SpeakeasyMetadata({ data: "json, name=includedUserIdTypes" })
  includedUserIdTypes?: PretargetingConfigIncludedUserIdTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=interstitialTargeting" })
  interstitialTargeting?: PretargetingConfigInterstitialTargetingEnum;

  @SpeakeasyMetadata({ data: "json, name=maximumQps" })
  maximumQps?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumViewabilityDecile" })
  minimumViewabilityDecile?: number;

  @SpeakeasyMetadata({ data: "json, name=publisherTargeting" })
  publisherTargeting?: StringTargetingDimension;

  @SpeakeasyMetadata({ data: "json, name=userListTargeting" })
  userListTargeting?: NumericTargetingDimension;

  @SpeakeasyMetadata({ data: "json, name=verticalTargeting" })
  verticalTargeting?: NumericTargetingDimension;

  @SpeakeasyMetadata({ data: "json, name=webTargeting" })
  webTargeting?: StringTargetingDimension;
}
