import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Activities } from "./activities";
import { CustomRichMediaEvents } from "./customrichmediaevents";
import { DateRange } from "./daterange";
import { DimensionValue } from "./dimensionvalue";
import { SortedDimension } from "./sorteddimension";
import { Recipient } from "./recipient";
import { ChannelGrouping } from "./channelgrouping";
import { PathFilter } from "./pathfilter";



// ReportCriteria
/** 
 * The report criteria for a report of type "STANDARD".
**/
export class ReportCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activities" })
  activities?: Activities;

  @SpeakeasyMetadata({ data: "json, name=customRichMediaEvents" })
  customRichMediaEvents?: CustomRichMediaEvents;

  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=dimensionFilters", elemType: DimensionValue })
  dimensionFilters?: DimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: SortedDimension })
  dimensions?: SortedDimension[];

  @SpeakeasyMetadata({ data: "json, name=metricNames" })
  metricNames?: string[];
}

export enum ReportCrossDimensionReachCriteriaDimensionEnum {
    Advertiser = "ADVERTISER",
    Campaign = "CAMPAIGN",
    SiteByAdvertiser = "SITE_BY_ADVERTISER",
    SiteByCampaign = "SITE_BY_CAMPAIGN"
}


// ReportCrossDimensionReachCriteria
/** 
 * The report criteria for a report of type "CROSS_DIMENSION_REACH".
**/
export class ReportCrossDimensionReachCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=breakdown", elemType: SortedDimension })
  breakdown?: SortedDimension[];

  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: ReportCrossDimensionReachCriteriaDimensionEnum;

  @SpeakeasyMetadata({ data: "json, name=dimensionFilters", elemType: DimensionValue })
  dimensionFilters?: DimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=overlapMetricNames" })
  overlapMetricNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=pivoted" })
  pivoted?: boolean;
}

export enum ReportDeliveryEmailOwnerDeliveryTypeEnum {
    Link = "LINK",
    Attachment = "ATTACHMENT"
}


// ReportDelivery
/** 
 * The report's email delivery settings.
**/
export class ReportDelivery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailOwner" })
  emailOwner?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emailOwnerDeliveryType" })
  emailOwnerDeliveryType?: ReportDeliveryEmailOwnerDeliveryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=recipients", elemType: Recipient })
  recipients?: Recipient[];
}


// ReportFloodlightCriteriaReportProperties
/** 
 * The properties of the report.
**/
export class ReportFloodlightCriteriaReportProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeAttributedIPConversions" })
  includeAttributedIpConversions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeUnattributedCookieConversions" })
  includeUnattributedCookieConversions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeUnattributedIPConversions" })
  includeUnattributedIpConversions?: boolean;
}


// ReportFloodlightCriteria
/** 
 * The report criteria for a report of type "FLOODLIGHT".
**/
export class ReportFloodlightCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customRichMediaEvents", elemType: DimensionValue })
  customRichMediaEvents?: DimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=dimensionFilters", elemType: DimensionValue })
  dimensionFilters?: DimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: SortedDimension })
  dimensions?: SortedDimension[];

  @SpeakeasyMetadata({ data: "json, name=floodlightConfigId" })
  floodlightConfigId?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=reportProperties" })
  reportProperties?: ReportFloodlightCriteriaReportProperties;
}

export enum ReportFormatEnum {
    Csv = "CSV",
    Excel = "EXCEL"
}


// ReportPathAttributionCriteria
/** 
 * The report criteria for a report of type "PATH_ATTRIBUTION".
**/
export class ReportPathAttributionCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityFilters", elemType: DimensionValue })
  activityFilters?: DimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=customChannelGrouping" })
  customChannelGrouping?: ChannelGrouping;

  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: SortedDimension })
  dimensions?: SortedDimension[];

  @SpeakeasyMetadata({ data: "json, name=floodlightConfigId" })
  floodlightConfigId?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=pathFilters", elemType: PathFilter })
  pathFilters?: PathFilter[];
}


// ReportPathCriteria
/** 
 * The report criteria for a report of type "PATH".
**/
export class ReportPathCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityFilters", elemType: DimensionValue })
  activityFilters?: DimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=customChannelGrouping" })
  customChannelGrouping?: ChannelGrouping;

  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: SortedDimension })
  dimensions?: SortedDimension[];

  @SpeakeasyMetadata({ data: "json, name=floodlightConfigId" })
  floodlightConfigId?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=pathFilters", elemType: PathFilter })
  pathFilters?: PathFilter[];
}


// ReportPathToConversionCriteriaReportProperties
/** 
 * The properties of the report.
**/
export class ReportPathToConversionCriteriaReportProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clicksLookbackWindow" })
  clicksLookbackWindow?: number;

  @SpeakeasyMetadata({ data: "json, name=impressionsLookbackWindow" })
  impressionsLookbackWindow?: number;

  @SpeakeasyMetadata({ data: "json, name=includeAttributedIPConversions" })
  includeAttributedIpConversions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeUnattributedCookieConversions" })
  includeUnattributedCookieConversions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeUnattributedIPConversions" })
  includeUnattributedIpConversions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maximumClickInteractions" })
  maximumClickInteractions?: number;

  @SpeakeasyMetadata({ data: "json, name=maximumImpressionInteractions" })
  maximumImpressionInteractions?: number;

  @SpeakeasyMetadata({ data: "json, name=maximumInteractionGap" })
  maximumInteractionGap?: number;

  @SpeakeasyMetadata({ data: "json, name=pivotOnInteractionPath" })
  pivotOnInteractionPath?: boolean;
}


// ReportPathToConversionCriteria
/** 
 * The report criteria for a report of type "PATH_TO_CONVERSION".
**/
export class ReportPathToConversionCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityFilters", elemType: DimensionValue })
  activityFilters?: DimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=conversionDimensions", elemType: SortedDimension })
  conversionDimensions?: SortedDimension[];

  @SpeakeasyMetadata({ data: "json, name=customFloodlightVariables", elemType: SortedDimension })
  customFloodlightVariables?: SortedDimension[];

  @SpeakeasyMetadata({ data: "json, name=customRichMediaEvents", elemType: DimensionValue })
  customRichMediaEvents?: DimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=floodlightConfigId" })
  floodlightConfigId?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=perInteractionDimensions", elemType: SortedDimension })
  perInteractionDimensions?: SortedDimension[];

  @SpeakeasyMetadata({ data: "json, name=reportProperties" })
  reportProperties?: ReportPathToConversionCriteriaReportProperties;
}


// ReportReachCriteria
/** 
 * The report criteria for a report of type "REACH".
**/
export class ReportReachCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activities" })
  activities?: Activities;

  @SpeakeasyMetadata({ data: "json, name=customRichMediaEvents" })
  customRichMediaEvents?: CustomRichMediaEvents;

  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=dimensionFilters", elemType: DimensionValue })
  dimensionFilters?: DimensionValue[];

  @SpeakeasyMetadata({ data: "json, name=dimensions", elemType: SortedDimension })
  dimensions?: SortedDimension[];

  @SpeakeasyMetadata({ data: "json, name=enableAllDimensionCombinations" })
  enableAllDimensionCombinations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=reachByFrequencyMetricNames" })
  reachByFrequencyMetricNames?: string[];
}

export enum ReportScheduleRepeatsOnWeekDaysEnum {
    Sunday = "SUNDAY",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY"
}

export enum ReportScheduleRunsOnDayOfMonthEnum {
    DayOfMonth = "DAY_OF_MONTH",
    WeekOfMonth = "WEEK_OF_MONTH"
}


// ReportSchedule
/** 
 * The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY".
**/
export class ReportSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=every" })
  every?: number;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=repeats" })
  repeats?: string;

  @SpeakeasyMetadata({ data: "json, name=repeatsOnWeekDays" })
  repeatsOnWeekDays?: ReportScheduleRepeatsOnWeekDaysEnum[];

  @SpeakeasyMetadata({ data: "json, name=runsOnDayOfMonth" })
  runsOnDayOfMonth?: ReportScheduleRunsOnDayOfMonthEnum;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}

export enum ReportTypeEnum {
    Standard = "STANDARD",
    Reach = "REACH",
    PathToConversion = "PATH_TO_CONVERSION",
    CrossDimensionReach = "CROSS_DIMENSION_REACH",
    Floodlight = "FLOODLIGHT",
    Path = "PATH",
    PathAttribution = "PATH_ATTRIBUTION"
}


// Report
/** 
 * Represents a Report resource.
**/
export class Report extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=criteria" })
  criteria?: ReportCriteria;

  @SpeakeasyMetadata({ data: "json, name=crossDimensionReachCriteria" })
  crossDimensionReachCriteria?: ReportCrossDimensionReachCriteria;

  @SpeakeasyMetadata({ data: "json, name=delivery" })
  delivery?: ReportDelivery;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=floodlightCriteria" })
  floodlightCriteria?: ReportFloodlightCriteria;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: ReportFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerProfileId" })
  ownerProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=pathAttributionCriteria" })
  pathAttributionCriteria?: ReportPathAttributionCriteria;

  @SpeakeasyMetadata({ data: "json, name=pathCriteria" })
  pathCriteria?: ReportPathCriteria;

  @SpeakeasyMetadata({ data: "json, name=pathToConversionCriteria" })
  pathToConversionCriteria?: ReportPathToConversionCriteria;

  @SpeakeasyMetadata({ data: "json, name=reachCriteria" })
  reachCriteria?: ReportReachCriteria;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: ReportSchedule;

  @SpeakeasyMetadata({ data: "json, name=subAccountId" })
  subAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ReportTypeEnum;
}
