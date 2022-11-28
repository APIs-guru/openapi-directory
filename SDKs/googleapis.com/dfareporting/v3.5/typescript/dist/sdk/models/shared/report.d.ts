import { SpeakeasyBase } from "../../../internal/utils";
import { Activities } from "./activities";
import { CustomRichMediaEvents } from "./customrichmediaevents";
import { DateRange } from "./daterange";
import { DimensionValue } from "./dimensionvalue";
import { SortedDimension } from "./sorteddimension";
import { Recipient } from "./recipient";
import { ChannelGrouping } from "./channelgrouping";
import { PathFilter } from "./pathfilter";
/**
 * The report criteria for a report of type "STANDARD".
**/
export declare class ReportCriteria extends SpeakeasyBase {
    activities?: Activities;
    customRichMediaEvents?: CustomRichMediaEvents;
    dateRange?: DateRange;
    dimensionFilters?: DimensionValue[];
    dimensions?: SortedDimension[];
    metricNames?: string[];
}
export declare enum ReportCrossDimensionReachCriteriaDimensionEnum {
    Advertiser = "ADVERTISER",
    Campaign = "CAMPAIGN",
    SiteByAdvertiser = "SITE_BY_ADVERTISER",
    SiteByCampaign = "SITE_BY_CAMPAIGN"
}
/**
 * The report criteria for a report of type "CROSS_DIMENSION_REACH".
**/
export declare class ReportCrossDimensionReachCriteria extends SpeakeasyBase {
    breakdown?: SortedDimension[];
    dateRange?: DateRange;
    dimension?: ReportCrossDimensionReachCriteriaDimensionEnum;
    dimensionFilters?: DimensionValue[];
    metricNames?: string[];
    overlapMetricNames?: string[];
    pivoted?: boolean;
}
export declare enum ReportDeliveryEmailOwnerDeliveryTypeEnum {
    Link = "LINK",
    Attachment = "ATTACHMENT"
}
/**
 * The report's email delivery settings.
**/
export declare class ReportDelivery extends SpeakeasyBase {
    emailOwner?: boolean;
    emailOwnerDeliveryType?: ReportDeliveryEmailOwnerDeliveryTypeEnum;
    message?: string;
    recipients?: Recipient[];
}
/**
 * The properties of the report.
**/
export declare class ReportFloodlightCriteriaReportProperties extends SpeakeasyBase {
    includeAttributedIpConversions?: boolean;
    includeUnattributedCookieConversions?: boolean;
    includeUnattributedIpConversions?: boolean;
}
/**
 * The report criteria for a report of type "FLOODLIGHT".
**/
export declare class ReportFloodlightCriteria extends SpeakeasyBase {
    customRichMediaEvents?: DimensionValue[];
    dateRange?: DateRange;
    dimensionFilters?: DimensionValue[];
    dimensions?: SortedDimension[];
    floodlightConfigId?: DimensionValue;
    metricNames?: string[];
    reportProperties?: ReportFloodlightCriteriaReportProperties;
}
export declare enum ReportFormatEnum {
    Csv = "CSV",
    Excel = "EXCEL"
}
/**
 * The report criteria for a report of type "PATH_ATTRIBUTION".
**/
export declare class ReportPathAttributionCriteria extends SpeakeasyBase {
    activityFilters?: DimensionValue[];
    customChannelGrouping?: ChannelGrouping;
    dateRange?: DateRange;
    dimensions?: SortedDimension[];
    floodlightConfigId?: DimensionValue;
    metricNames?: string[];
    pathFilters?: PathFilter[];
}
/**
 * The report criteria for a report of type "PATH".
**/
export declare class ReportPathCriteria extends SpeakeasyBase {
    activityFilters?: DimensionValue[];
    customChannelGrouping?: ChannelGrouping;
    dateRange?: DateRange;
    dimensions?: SortedDimension[];
    floodlightConfigId?: DimensionValue;
    metricNames?: string[];
    pathFilters?: PathFilter[];
}
/**
 * The properties of the report.
**/
export declare class ReportPathToConversionCriteriaReportProperties extends SpeakeasyBase {
    clicksLookbackWindow?: number;
    impressionsLookbackWindow?: number;
    includeAttributedIpConversions?: boolean;
    includeUnattributedCookieConversions?: boolean;
    includeUnattributedIpConversions?: boolean;
    maximumClickInteractions?: number;
    maximumImpressionInteractions?: number;
    maximumInteractionGap?: number;
    pivotOnInteractionPath?: boolean;
}
/**
 * The report criteria for a report of type "PATH_TO_CONVERSION".
**/
export declare class ReportPathToConversionCriteria extends SpeakeasyBase {
    activityFilters?: DimensionValue[];
    conversionDimensions?: SortedDimension[];
    customFloodlightVariables?: SortedDimension[];
    customRichMediaEvents?: DimensionValue[];
    dateRange?: DateRange;
    floodlightConfigId?: DimensionValue;
    metricNames?: string[];
    perInteractionDimensions?: SortedDimension[];
    reportProperties?: ReportPathToConversionCriteriaReportProperties;
}
/**
 * The report criteria for a report of type "REACH".
**/
export declare class ReportReachCriteria extends SpeakeasyBase {
    activities?: Activities;
    customRichMediaEvents?: CustomRichMediaEvents;
    dateRange?: DateRange;
    dimensionFilters?: DimensionValue[];
    dimensions?: SortedDimension[];
    enableAllDimensionCombinations?: boolean;
    metricNames?: string[];
    reachByFrequencyMetricNames?: string[];
}
export declare enum ReportScheduleRepeatsOnWeekDaysEnum {
    Sunday = "SUNDAY",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY"
}
export declare enum ReportScheduleRunsOnDayOfMonthEnum {
    DayOfMonth = "DAY_OF_MONTH",
    WeekOfMonth = "WEEK_OF_MONTH"
}
/**
 * The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY".
**/
export declare class ReportSchedule extends SpeakeasyBase {
    active?: boolean;
    every?: number;
    expirationDate?: Date;
    repeats?: string;
    repeatsOnWeekDays?: ReportScheduleRepeatsOnWeekDaysEnum[];
    runsOnDayOfMonth?: ReportScheduleRunsOnDayOfMonthEnum;
    startDate?: Date;
}
export declare enum ReportTypeEnum {
    Standard = "STANDARD",
    Reach = "REACH",
    PathToConversion = "PATH_TO_CONVERSION",
    CrossDimensionReach = "CROSS_DIMENSION_REACH",
    Floodlight = "FLOODLIGHT",
    Path = "PATH",
    PathAttribution = "PATH_ATTRIBUTION"
}
/**
 * Represents a Report resource.
**/
export declare class Report extends SpeakeasyBase {
    accountId?: string;
    criteria?: ReportCriteria;
    crossDimensionReachCriteria?: ReportCrossDimensionReachCriteria;
    delivery?: ReportDelivery;
    etag?: string;
    fileName?: string;
    floodlightCriteria?: ReportFloodlightCriteria;
    format?: ReportFormatEnum;
    id?: string;
    kind?: string;
    lastModifiedTime?: string;
    name?: string;
    ownerProfileId?: string;
    pathAttributionCriteria?: ReportPathAttributionCriteria;
    pathCriteria?: ReportPathCriteria;
    pathToConversionCriteria?: ReportPathToConversionCriteria;
    reachCriteria?: ReportReachCriteria;
    schedule?: ReportSchedule;
    subAccountId?: string;
    type?: ReportTypeEnum;
}
