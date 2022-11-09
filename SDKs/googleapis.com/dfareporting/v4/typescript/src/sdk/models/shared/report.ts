import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Activities } from "./activities";
import { CustomRichMediaEvents } from "./customrichmediaevents";
import { DateRange } from "./daterange";
import { DimensionValue } from "./dimensionvalue";
import { SortedDimension } from "./sorteddimension";
import { SortedDimension } from "./sorteddimension";
import { DateRange } from "./daterange";
import { DimensionValue } from "./dimensionvalue";
import { Recipient } from "./recipient";
import { DimensionValue } from "./dimensionvalue";
import { DateRange } from "./daterange";
import { DimensionValue } from "./dimensionvalue";
import { SortedDimension } from "./sorteddimension";
import { DimensionValue } from "./dimensionvalue";
import { DimensionValue } from "./dimensionvalue";
import { ChannelGrouping } from "./channelgrouping";
import { DateRange } from "./daterange";
import { SortedDimension } from "./sorteddimension";
import { DimensionValue } from "./dimensionvalue";
import { PathFilter } from "./pathfilter";
import { DimensionValue } from "./dimensionvalue";
import { ChannelGrouping } from "./channelgrouping";
import { DateRange } from "./daterange";
import { SortedDimension } from "./sorteddimension";
import { DimensionValue } from "./dimensionvalue";
import { PathFilter } from "./pathfilter";
import { DimensionValue } from "./dimensionvalue";
import { SortedDimension } from "./sorteddimension";
import { SortedDimension } from "./sorteddimension";
import { DimensionValue } from "./dimensionvalue";
import { DateRange } from "./daterange";
import { DimensionValue } from "./dimensionvalue";
import { SortedDimension } from "./sorteddimension";
import { Activities } from "./activities";
import { CustomRichMediaEvents } from "./customrichmediaevents";
import { DateRange } from "./daterange";
import { DimensionValue } from "./dimensionvalue";
import { SortedDimension } from "./sorteddimension";


// ReportCriteria
/** 
 * The report criteria for a report of type "STANDARD".
**/
export class ReportCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=activities" })
  activities?: Activities;

  @Metadata({ data: "json, name=customRichMediaEvents" })
  customRichMediaEvents?: CustomRichMediaEvents;

  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=dimensionFilters", elemType: shared.DimensionValue })
  dimensionFilters?: DimensionValue[];

  @Metadata({ data: "json, name=dimensions", elemType: shared.SortedDimension })
  dimensions?: SortedDimension[];

  @Metadata({ data: "json, name=metricNames" })
  metricNames?: string[];
}

export enum ReportCrossDimensionReachCriteriaDimensionEnum {
    Advertiser = "ADVERTISER"
,    Campaign = "CAMPAIGN"
,    SiteByAdvertiser = "SITE_BY_ADVERTISER"
,    SiteByCampaign = "SITE_BY_CAMPAIGN"
}


// ReportCrossDimensionReachCriteria
/** 
 * The report criteria for a report of type "CROSS_DIMENSION_REACH".
**/
export class ReportCrossDimensionReachCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=breakdown", elemType: shared.SortedDimension })
  breakdown?: SortedDimension[];

  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=dimension" })
  dimension?: ReportCrossDimensionReachCriteriaDimensionEnum;

  @Metadata({ data: "json, name=dimensionFilters", elemType: shared.DimensionValue })
  dimensionFilters?: DimensionValue[];

  @Metadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @Metadata({ data: "json, name=overlapMetricNames" })
  overlapMetricNames?: string[];

  @Metadata({ data: "json, name=pivoted" })
  pivoted?: boolean;
}

export enum ReportDeliveryEmailOwnerDeliveryTypeEnum {
    Link = "LINK"
,    Attachment = "ATTACHMENT"
}


// ReportDelivery
/** 
 * The report's email delivery settings.
**/
export class ReportDelivery extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailOwner" })
  emailOwner?: boolean;

  @Metadata({ data: "json, name=emailOwnerDeliveryType" })
  emailOwnerDeliveryType?: ReportDeliveryEmailOwnerDeliveryTypeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=recipients", elemType: shared.Recipient })
  recipients?: Recipient[];
}


// ReportFloodlightCriteriaReportProperties
/** 
 * The properties of the report.
**/
export class ReportFloodlightCriteriaReportProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeAttributedIPConversions" })
  includeAttributedIpConversions?: boolean;

  @Metadata({ data: "json, name=includeUnattributedCookieConversions" })
  includeUnattributedCookieConversions?: boolean;

  @Metadata({ data: "json, name=includeUnattributedIPConversions" })
  includeUnattributedIpConversions?: boolean;
}


// ReportFloodlightCriteria
/** 
 * The report criteria for a report of type "FLOODLIGHT".
**/
export class ReportFloodlightCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=customRichMediaEvents", elemType: shared.DimensionValue })
  customRichMediaEvents?: DimensionValue[];

  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=dimensionFilters", elemType: shared.DimensionValue })
  dimensionFilters?: DimensionValue[];

  @Metadata({ data: "json, name=dimensions", elemType: shared.SortedDimension })
  dimensions?: SortedDimension[];

  @Metadata({ data: "json, name=floodlightConfigId" })
  floodlightConfigId?: DimensionValue;

  @Metadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @Metadata({ data: "json, name=reportProperties" })
  reportProperties?: ReportFloodlightCriteriaReportProperties;
}

export enum ReportFormatEnum {
    Csv = "CSV"
,    Excel = "EXCEL"
}


// ReportPathAttributionCriteria
/** 
 * The report criteria for a report of type "PATH_ATTRIBUTION".
**/
export class ReportPathAttributionCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityFilters", elemType: shared.DimensionValue })
  activityFilters?: DimensionValue[];

  @Metadata({ data: "json, name=customChannelGrouping" })
  customChannelGrouping?: ChannelGrouping;

  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=dimensions", elemType: shared.SortedDimension })
  dimensions?: SortedDimension[];

  @Metadata({ data: "json, name=floodlightConfigId" })
  floodlightConfigId?: DimensionValue;

  @Metadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @Metadata({ data: "json, name=pathFilters", elemType: shared.PathFilter })
  pathFilters?: PathFilter[];
}


// ReportPathCriteria
/** 
 * The report criteria for a report of type "PATH".
**/
export class ReportPathCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityFilters", elemType: shared.DimensionValue })
  activityFilters?: DimensionValue[];

  @Metadata({ data: "json, name=customChannelGrouping" })
  customChannelGrouping?: ChannelGrouping;

  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=dimensions", elemType: shared.SortedDimension })
  dimensions?: SortedDimension[];

  @Metadata({ data: "json, name=floodlightConfigId" })
  floodlightConfigId?: DimensionValue;

  @Metadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @Metadata({ data: "json, name=pathFilters", elemType: shared.PathFilter })
  pathFilters?: PathFilter[];
}


// ReportPathToConversionCriteriaReportProperties
/** 
 * The properties of the report.
**/
export class ReportPathToConversionCriteriaReportProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=clicksLookbackWindow" })
  clicksLookbackWindow?: number;

  @Metadata({ data: "json, name=impressionsLookbackWindow" })
  impressionsLookbackWindow?: number;

  @Metadata({ data: "json, name=includeAttributedIPConversions" })
  includeAttributedIpConversions?: boolean;

  @Metadata({ data: "json, name=includeUnattributedCookieConversions" })
  includeUnattributedCookieConversions?: boolean;

  @Metadata({ data: "json, name=includeUnattributedIPConversions" })
  includeUnattributedIpConversions?: boolean;

  @Metadata({ data: "json, name=maximumClickInteractions" })
  maximumClickInteractions?: number;

  @Metadata({ data: "json, name=maximumImpressionInteractions" })
  maximumImpressionInteractions?: number;

  @Metadata({ data: "json, name=maximumInteractionGap" })
  maximumInteractionGap?: number;

  @Metadata({ data: "json, name=pivotOnInteractionPath" })
  pivotOnInteractionPath?: boolean;
}


// ReportPathToConversionCriteria
/** 
 * The report criteria for a report of type "PATH_TO_CONVERSION".
**/
export class ReportPathToConversionCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityFilters", elemType: shared.DimensionValue })
  activityFilters?: DimensionValue[];

  @Metadata({ data: "json, name=conversionDimensions", elemType: shared.SortedDimension })
  conversionDimensions?: SortedDimension[];

  @Metadata({ data: "json, name=customFloodlightVariables", elemType: shared.SortedDimension })
  customFloodlightVariables?: SortedDimension[];

  @Metadata({ data: "json, name=customRichMediaEvents", elemType: shared.DimensionValue })
  customRichMediaEvents?: DimensionValue[];

  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=floodlightConfigId" })
  floodlightConfigId?: DimensionValue;

  @Metadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @Metadata({ data: "json, name=perInteractionDimensions", elemType: shared.SortedDimension })
  perInteractionDimensions?: SortedDimension[];

  @Metadata({ data: "json, name=reportProperties" })
  reportProperties?: ReportPathToConversionCriteriaReportProperties;
}


// ReportReachCriteria
/** 
 * The report criteria for a report of type "REACH".
**/
export class ReportReachCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=activities" })
  activities?: Activities;

  @Metadata({ data: "json, name=customRichMediaEvents" })
  customRichMediaEvents?: CustomRichMediaEvents;

  @Metadata({ data: "json, name=dateRange" })
  dateRange?: DateRange;

  @Metadata({ data: "json, name=dimensionFilters", elemType: shared.DimensionValue })
  dimensionFilters?: DimensionValue[];

  @Metadata({ data: "json, name=dimensions", elemType: shared.SortedDimension })
  dimensions?: SortedDimension[];

  @Metadata({ data: "json, name=enableAllDimensionCombinations" })
  enableAllDimensionCombinations?: boolean;

  @Metadata({ data: "json, name=metricNames" })
  metricNames?: string[];

  @Metadata({ data: "json, name=reachByFrequencyMetricNames" })
  reachByFrequencyMetricNames?: string[];
}

export enum ReportScheduleRepeatsOnWeekDaysEnum {
    Sunday = "SUNDAY"
,    Monday = "MONDAY"
,    Tuesday = "TUESDAY"
,    Wednesday = "WEDNESDAY"
,    Thursday = "THURSDAY"
,    Friday = "FRIDAY"
,    Saturday = "SATURDAY"
}

export enum ReportScheduleRunsOnDayOfMonthEnum {
    DayOfMonth = "DAY_OF_MONTH"
,    WeekOfMonth = "WEEK_OF_MONTH"
}


// ReportSchedule
/** 
 * The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY".
**/
export class ReportSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=every" })
  every?: number;

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=repeats" })
  repeats?: string;

  @Metadata({ data: "json, name=repeatsOnWeekDays" })
  repeatsOnWeekDays?: ReportScheduleRepeatsOnWeekDaysEnum[];

  @Metadata({ data: "json, name=runsOnDayOfMonth" })
  runsOnDayOfMonth?: ReportScheduleRunsOnDayOfMonthEnum;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}

export enum ReportTypeEnum {
    Standard = "STANDARD"
,    Reach = "REACH"
,    PathToConversion = "PATH_TO_CONVERSION"
,    CrossDimensionReach = "CROSS_DIMENSION_REACH"
,    Floodlight = "FLOODLIGHT"
,    Path = "PATH"
,    PathAttribution = "PATH_ATTRIBUTION"
}


// Report
/** 
 * Represents a Report resource.
**/
export class Report extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=criteria" })
  criteria?: ReportCriteria;

  @Metadata({ data: "json, name=crossDimensionReachCriteria" })
  crossDimensionReachCriteria?: ReportCrossDimensionReachCriteria;

  @Metadata({ data: "json, name=delivery" })
  delivery?: ReportDelivery;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=floodlightCriteria" })
  floodlightCriteria?: ReportFloodlightCriteria;

  @Metadata({ data: "json, name=format" })
  format?: ReportFormatEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ownerProfileId" })
  ownerProfileId?: string;

  @Metadata({ data: "json, name=pathAttributionCriteria" })
  pathAttributionCriteria?: ReportPathAttributionCriteria;

  @Metadata({ data: "json, name=pathCriteria" })
  pathCriteria?: ReportPathCriteria;

  @Metadata({ data: "json, name=pathToConversionCriteria" })
  pathToConversionCriteria?: ReportPathToConversionCriteria;

  @Metadata({ data: "json, name=reachCriteria" })
  reachCriteria?: ReportReachCriteria;

  @Metadata({ data: "json, name=schedule" })
  schedule?: ReportSchedule;

  @Metadata({ data: "json, name=subAccountId" })
  subAccountId?: string;

  @Metadata({ data: "json, name=type" })
  type?: ReportTypeEnum;
}
