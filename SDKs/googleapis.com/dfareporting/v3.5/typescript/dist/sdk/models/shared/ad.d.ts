import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { ClickThroughUrl } from "./clickthroughurl";
import { ClickThroughUrlSuffixProperties } from "./clickthroughurlsuffixproperties";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { CreativeGroupAssignment } from "./creativegroupassignment";
import { CreativeRotation } from "./creativerotation";
import { DayPartTargeting } from "./dayparttargeting";
import { DefaultClickThroughEventTagProperties } from "./defaultclickthrougheventtagproperties";
import { DeliverySchedule } from "./deliveryschedule";
import { EventTagOverride } from "./eventtagoverride";
import { GeoTargeting } from "./geotargeting";
import { KeyValueTargetingExpression } from "./keyvaluetargetingexpression";
import { LanguageTargeting } from "./languagetargeting";
import { PlacementAssignment } from "./placementassignment";
import { ListTargetingExpression } from "./listtargetingexpression";
import { Size } from "./size";
import { TechnologyTargeting } from "./technologytargeting";
export declare enum AdCompatibilityEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}
export declare enum AdTypeEnum {
    AdServingStandardAd = "AD_SERVING_STANDARD_AD",
    AdServingDefaultAd = "AD_SERVING_DEFAULT_AD",
    AdServingClickTracker = "AD_SERVING_CLICK_TRACKER",
    AdServingTracking = "AD_SERVING_TRACKING",
    AdServingBrandSafeAd = "AD_SERVING_BRAND_SAFE_AD"
}
/**
 * Contains properties of a Campaign Manager ad.
**/
export declare class Ad extends SpeakeasyBase {
    accountId?: string;
    active?: boolean;
    advertiserId?: string;
    advertiserIdDimensionValue?: DimensionValue;
    archived?: boolean;
    audienceSegmentId?: string;
    campaignId?: string;
    campaignIdDimensionValue?: DimensionValue;
    clickThroughUrl?: ClickThroughUrl;
    clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;
    comments?: string;
    compatibility?: AdCompatibilityEnum;
    createInfo?: LastModifiedInfo;
    creativeGroupAssignments?: CreativeGroupAssignment[];
    creativeRotation?: CreativeRotation;
    dayPartTargeting?: DayPartTargeting;
    defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;
    deliverySchedule?: DeliverySchedule;
    dynamicClickTracker?: boolean;
    endTime?: Date;
    eventTagOverrides?: EventTagOverride[];
    geoTargeting?: GeoTargeting;
    id?: string;
    idDimensionValue?: DimensionValue;
    keyValueTargetingExpression?: KeyValueTargetingExpression;
    kind?: string;
    languageTargeting?: LanguageTargeting;
    lastModifiedInfo?: LastModifiedInfo;
    name?: string;
    placementAssignments?: PlacementAssignment[];
    remarketingListExpression?: ListTargetingExpression;
    size?: Size;
    sslCompliant?: boolean;
    sslRequired?: boolean;
    startTime?: Date;
    subaccountId?: string;
    targetingTemplateId?: string;
    technologyTargeting?: TechnologyTargeting;
    type?: AdTypeEnum;
}
