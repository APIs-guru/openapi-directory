import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DimensionValue } from "./dimensionvalue";
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
import { DimensionValue } from "./dimensionvalue";
import { KeyValueTargetingExpression } from "./keyvaluetargetingexpression";
import { LanguageTargeting } from "./languagetargeting";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { PlacementAssignment } from "./placementassignment";
import { ListTargetingExpression } from "./listtargetingexpression";
import { Size } from "./size";
import { TechnologyTargeting } from "./technologytargeting";

export enum AdCompatibilityEnum {
    Display = "DISPLAY"
,    DisplayInterstitial = "DISPLAY_INTERSTITIAL"
,    App = "APP"
,    AppInterstitial = "APP_INTERSTITIAL"
,    InStreamVideo = "IN_STREAM_VIDEO"
,    InStreamAudio = "IN_STREAM_AUDIO"
}

export enum AdTypeEnum {
    AdServingStandardAd = "AD_SERVING_STANDARD_AD"
,    AdServingDefaultAd = "AD_SERVING_DEFAULT_AD"
,    AdServingClickTracker = "AD_SERVING_CLICK_TRACKER"
,    AdServingTracking = "AD_SERVING_TRACKING"
,    AdServingBrandSafeAd = "AD_SERVING_BRAND_SAFE_AD"
}


// Ad
/** 
 * Contains properties of a Campaign Manager ad.
**/
export class Ad extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=audienceSegmentId" })
  audienceSegmentId?: string;

  @Metadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=campaignIdDimensionValue" })
  campaignIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: ClickThroughUrl;

  @Metadata({ data: "json, name=clickThroughUrlSuffixProperties" })
  clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=compatibility" })
  compatibility?: AdCompatibilityEnum;

  @Metadata({ data: "json, name=createInfo" })
  createInfo?: LastModifiedInfo;

  @Metadata({ data: "json, name=creativeGroupAssignments", elemType: shared.CreativeGroupAssignment })
  creativeGroupAssignments?: CreativeGroupAssignment[];

  @Metadata({ data: "json, name=creativeRotation" })
  creativeRotation?: CreativeRotation;

  @Metadata({ data: "json, name=dayPartTargeting" })
  dayPartTargeting?: DayPartTargeting;

  @Metadata({ data: "json, name=defaultClickThroughEventTagProperties" })
  defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties;

  @Metadata({ data: "json, name=deliverySchedule" })
  deliverySchedule?: DeliverySchedule;

  @Metadata({ data: "json, name=dynamicClickTracker" })
  dynamicClickTracker?: boolean;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=eventTagOverrides", elemType: shared.EventTagOverride })
  eventTagOverrides?: EventTagOverride[];

  @Metadata({ data: "json, name=geoTargeting" })
  geoTargeting?: GeoTargeting;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=idDimensionValue" })
  idDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=keyValueTargetingExpression" })
  keyValueTargetingExpression?: KeyValueTargetingExpression;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=languageTargeting" })
  languageTargeting?: LanguageTargeting;

  @Metadata({ data: "json, name=lastModifiedInfo" })
  lastModifiedInfo?: LastModifiedInfo;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=placementAssignments", elemType: shared.PlacementAssignment })
  placementAssignments?: PlacementAssignment[];

  @Metadata({ data: "json, name=remarketingListExpression" })
  remarketingListExpression?: ListTargetingExpression;

  @Metadata({ data: "json, name=size" })
  size?: Size;

  @Metadata({ data: "json, name=sslCompliant" })
  sslCompliant?: boolean;

  @Metadata({ data: "json, name=sslRequired" })
  sslRequired?: boolean;

  @Metadata({ data: "json, name=startTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=targetingTemplateId" })
  targetingTemplateId?: string;

  @Metadata({ data: "json, name=technologyTargeting" })
  technologyTargeting?: TechnologyTargeting;

  @Metadata({ data: "json, name=type" })
  type?: AdTypeEnum;
}
