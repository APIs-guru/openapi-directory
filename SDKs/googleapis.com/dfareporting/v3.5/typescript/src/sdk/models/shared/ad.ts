import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum AdCompatibilityEnum {
    Display = "DISPLAY",
    DisplayInterstitial = "DISPLAY_INTERSTITIAL",
    App = "APP",
    AppInterstitial = "APP_INTERSTITIAL",
    InStreamVideo = "IN_STREAM_VIDEO",
    InStreamAudio = "IN_STREAM_AUDIO"
}

export enum AdTypeEnum {
    AdServingStandardAd = "AD_SERVING_STANDARD_AD",
    AdServingDefaultAd = "AD_SERVING_DEFAULT_AD",
    AdServingClickTracker = "AD_SERVING_CLICK_TRACKER",
    AdServingTracking = "AD_SERVING_TRACKING",
    AdServingBrandSafeAd = "AD_SERVING_BRAND_SAFE_AD"
}


// Ad
/** 
 * Contains properties of a Campaign Manager ad.
**/
export class Ad extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=audienceSegmentId" })
  audienceSegmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignIdDimensionValue" })
  campaignIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: ClickThroughUrl;

  @SpeakeasyMetadata({ data: "json, name=clickThroughUrlSuffixProperties" })
  clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=compatibility" })
  compatibility?: AdCompatibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=createInfo" })
  createInfo?: LastModifiedInfo;

  @SpeakeasyMetadata({ data: "json, name=creativeGroupAssignments", elemType: CreativeGroupAssignment })
  creativeGroupAssignments?: CreativeGroupAssignment[];

  @SpeakeasyMetadata({ data: "json, name=creativeRotation" })
  creativeRotation?: CreativeRotation;

  @SpeakeasyMetadata({ data: "json, name=dayPartTargeting" })
  dayPartTargeting?: DayPartTargeting;

  @SpeakeasyMetadata({ data: "json, name=defaultClickThroughEventTagProperties" })
  defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;

  @SpeakeasyMetadata({ data: "json, name=deliverySchedule" })
  deliverySchedule?: DeliverySchedule;

  @SpeakeasyMetadata({ data: "json, name=dynamicClickTracker" })
  dynamicClickTracker?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=eventTagOverrides", elemType: EventTagOverride })
  eventTagOverrides?: EventTagOverride[];

  @SpeakeasyMetadata({ data: "json, name=geoTargeting" })
  geoTargeting?: GeoTargeting;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=keyValueTargetingExpression" })
  keyValueTargetingExpression?: KeyValueTargetingExpression;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=languageTargeting" })
  languageTargeting?: LanguageTargeting;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=placementAssignments", elemType: PlacementAssignment })
  placementAssignments?: PlacementAssignment[];

  @SpeakeasyMetadata({ data: "json, name=remarketingListExpression" })
  remarketingListExpression?: ListTargetingExpression;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: Size;

  @SpeakeasyMetadata({ data: "json, name=sslCompliant" })
  sslCompliant?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sslRequired" })
  sslRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetingTemplateId" })
  targetingTemplateId?: string;

  @SpeakeasyMetadata({ data: "json, name=technologyTargeting" })
  technologyTargeting?: TechnologyTargeting;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AdTypeEnum;
}
