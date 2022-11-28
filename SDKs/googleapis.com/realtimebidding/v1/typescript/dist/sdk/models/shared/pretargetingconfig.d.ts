import { SpeakeasyBase } from "../../../internal/utils";
import { AppTargeting } from "./apptargeting";
import { NumericTargetingDimension } from "./numerictargetingdimension";
import { CreativeDimensions } from "./creativedimensions";
import { StringTargetingDimension } from "./stringtargetingdimension";
export declare enum PretargetingConfigAllowedUserTargetingModesEnum {
    UserTargetingModeUnspecified = "USER_TARGETING_MODE_UNSPECIFIED",
    RemarketingAds = "REMARKETING_ADS",
    InterestBasedTargeting = "INTEREST_BASED_TARGETING"
}
export declare enum PretargetingConfigIncludedEnvironmentsEnum {
    EnvironmentUnspecified = "ENVIRONMENT_UNSPECIFIED",
    App = "APP",
    Web = "WEB"
}
export declare enum PretargetingConfigIncludedFormatsEnum {
    CreativeFormatUnspecified = "CREATIVE_FORMAT_UNSPECIFIED",
    Html = "HTML",
    Vast = "VAST",
    Native = "NATIVE"
}
export declare enum PretargetingConfigIncludedPlatformsEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    PersonalComputer = "PERSONAL_COMPUTER",
    Phone = "PHONE",
    Tablet = "TABLET",
    ConnectedTv = "CONNECTED_TV"
}
export declare enum PretargetingConfigIncludedUserIdTypesEnum {
    UserIdTypeUnspecified = "USER_ID_TYPE_UNSPECIFIED",
    HostedMatchData = "HOSTED_MATCH_DATA",
    GoogleCookie = "GOOGLE_COOKIE",
    DeviceId = "DEVICE_ID"
}
export declare enum PretargetingConfigInterstitialTargetingEnum {
    InterstitialTargetingUnspecified = "INTERSTITIAL_TARGETING_UNSPECIFIED",
    OnlyInterstitialRequests = "ONLY_INTERSTITIAL_REQUESTS",
    OnlyNonInterstitialRequests = "ONLY_NON_INTERSTITIAL_REQUESTS"
}
export declare enum PretargetingConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Suspended = "SUSPENDED"
}
/**
 * Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for.
**/
export declare class PretargetingConfig extends SpeakeasyBase {
    allowedUserTargetingModes?: PretargetingConfigAllowedUserTargetingModesEnum[];
    appTargeting?: AppTargeting;
    billingId?: string;
    displayName?: string;
    excludedContentLabelIds?: string[];
    geoTargeting?: NumericTargetingDimension;
    includedCreativeDimensions?: CreativeDimensions[];
    includedEnvironments?: PretargetingConfigIncludedEnvironmentsEnum[];
    includedFormats?: PretargetingConfigIncludedFormatsEnum[];
    includedLanguages?: string[];
    includedMobileOperatingSystemIds?: string[];
    includedPlatforms?: PretargetingConfigIncludedPlatformsEnum[];
    includedUserIdTypes?: PretargetingConfigIncludedUserIdTypesEnum[];
    interstitialTargeting?: PretargetingConfigInterstitialTargetingEnum;
    invalidGeoIds?: string[];
    maximumQps?: string;
    minimumViewabilityDecile?: number;
    name?: string;
    publisherTargeting?: StringTargetingDimension;
    state?: PretargetingConfigStateEnum;
    userListTargeting?: NumericTargetingDimension;
    verticalTargeting?: NumericTargetingDimension;
    webTargeting?: StringTargetingDimension;
}
/**
 * Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for.
**/
export declare class PretargetingConfigInput extends SpeakeasyBase {
    allowedUserTargetingModes?: PretargetingConfigAllowedUserTargetingModesEnum[];
    appTargeting?: AppTargeting;
    displayName?: string;
    excludedContentLabelIds?: string[];
    geoTargeting?: NumericTargetingDimension;
    includedCreativeDimensions?: CreativeDimensions[];
    includedEnvironments?: PretargetingConfigIncludedEnvironmentsEnum[];
    includedFormats?: PretargetingConfigIncludedFormatsEnum[];
    includedLanguages?: string[];
    includedMobileOperatingSystemIds?: string[];
    includedPlatforms?: PretargetingConfigIncludedPlatformsEnum[];
    includedUserIdTypes?: PretargetingConfigIncludedUserIdTypesEnum[];
    interstitialTargeting?: PretargetingConfigInterstitialTargetingEnum;
    maximumQps?: string;
    minimumViewabilityDecile?: number;
    publisherTargeting?: StringTargetingDimension;
    userListTargeting?: NumericTargetingDimension;
    verticalTargeting?: NumericTargetingDimension;
    webTargeting?: StringTargetingDimension;
}
