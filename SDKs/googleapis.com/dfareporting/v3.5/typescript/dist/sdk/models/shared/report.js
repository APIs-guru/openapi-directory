var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var ReportCriteria = /** @class */ (function (_super) {
    __extends(ReportCriteria, _super);
    function ReportCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activities" }),
        __metadata("design:type", Activities)
    ], ReportCriteria.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customRichMediaEvents" }),
        __metadata("design:type", CustomRichMediaEvents)
    ], ReportCriteria.prototype, "customRichMediaEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRange" }),
        __metadata("design:type", DateRange)
    ], ReportCriteria.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionFilters", elemType: DimensionValue }),
        __metadata("design:type", Array)
    ], ReportCriteria.prototype, "dimensionFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions", elemType: SortedDimension }),
        __metadata("design:type", Array)
    ], ReportCriteria.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricNames" }),
        __metadata("design:type", Array)
    ], ReportCriteria.prototype, "metricNames", void 0);
    return ReportCriteria;
}(SpeakeasyBase));
export { ReportCriteria };
export var ReportCrossDimensionReachCriteriaDimensionEnum;
(function (ReportCrossDimensionReachCriteriaDimensionEnum) {
    ReportCrossDimensionReachCriteriaDimensionEnum["Advertiser"] = "ADVERTISER";
    ReportCrossDimensionReachCriteriaDimensionEnum["Campaign"] = "CAMPAIGN";
    ReportCrossDimensionReachCriteriaDimensionEnum["SiteByAdvertiser"] = "SITE_BY_ADVERTISER";
    ReportCrossDimensionReachCriteriaDimensionEnum["SiteByCampaign"] = "SITE_BY_CAMPAIGN";
})(ReportCrossDimensionReachCriteriaDimensionEnum || (ReportCrossDimensionReachCriteriaDimensionEnum = {}));
// ReportCrossDimensionReachCriteria
/**
 * The report criteria for a report of type "CROSS_DIMENSION_REACH".
**/
var ReportCrossDimensionReachCriteria = /** @class */ (function (_super) {
    __extends(ReportCrossDimensionReachCriteria, _super);
    function ReportCrossDimensionReachCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=breakdown", elemType: SortedDimension }),
        __metadata("design:type", Array)
    ], ReportCrossDimensionReachCriteria.prototype, "breakdown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRange" }),
        __metadata("design:type", DateRange)
    ], ReportCrossDimensionReachCriteria.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimension" }),
        __metadata("design:type", String)
    ], ReportCrossDimensionReachCriteria.prototype, "dimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionFilters", elemType: DimensionValue }),
        __metadata("design:type", Array)
    ], ReportCrossDimensionReachCriteria.prototype, "dimensionFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricNames" }),
        __metadata("design:type", Array)
    ], ReportCrossDimensionReachCriteria.prototype, "metricNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overlapMetricNames" }),
        __metadata("design:type", Array)
    ], ReportCrossDimensionReachCriteria.prototype, "overlapMetricNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pivoted" }),
        __metadata("design:type", Boolean)
    ], ReportCrossDimensionReachCriteria.prototype, "pivoted", void 0);
    return ReportCrossDimensionReachCriteria;
}(SpeakeasyBase));
export { ReportCrossDimensionReachCriteria };
export var ReportDeliveryEmailOwnerDeliveryTypeEnum;
(function (ReportDeliveryEmailOwnerDeliveryTypeEnum) {
    ReportDeliveryEmailOwnerDeliveryTypeEnum["Link"] = "LINK";
    ReportDeliveryEmailOwnerDeliveryTypeEnum["Attachment"] = "ATTACHMENT";
})(ReportDeliveryEmailOwnerDeliveryTypeEnum || (ReportDeliveryEmailOwnerDeliveryTypeEnum = {}));
// ReportDelivery
/**
 * The report's email delivery settings.
**/
var ReportDelivery = /** @class */ (function (_super) {
    __extends(ReportDelivery, _super);
    function ReportDelivery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailOwner" }),
        __metadata("design:type", Boolean)
    ], ReportDelivery.prototype, "emailOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailOwnerDeliveryType" }),
        __metadata("design:type", String)
    ], ReportDelivery.prototype, "emailOwnerDeliveryType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReportDelivery.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recipients", elemType: Recipient }),
        __metadata("design:type", Array)
    ], ReportDelivery.prototype, "recipients", void 0);
    return ReportDelivery;
}(SpeakeasyBase));
export { ReportDelivery };
// ReportFloodlightCriteriaReportProperties
/**
 * The properties of the report.
**/
var ReportFloodlightCriteriaReportProperties = /** @class */ (function (_super) {
    __extends(ReportFloodlightCriteriaReportProperties, _super);
    function ReportFloodlightCriteriaReportProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeAttributedIPConversions" }),
        __metadata("design:type", Boolean)
    ], ReportFloodlightCriteriaReportProperties.prototype, "includeAttributedIpConversions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeUnattributedCookieConversions" }),
        __metadata("design:type", Boolean)
    ], ReportFloodlightCriteriaReportProperties.prototype, "includeUnattributedCookieConversions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeUnattributedIPConversions" }),
        __metadata("design:type", Boolean)
    ], ReportFloodlightCriteriaReportProperties.prototype, "includeUnattributedIpConversions", void 0);
    return ReportFloodlightCriteriaReportProperties;
}(SpeakeasyBase));
export { ReportFloodlightCriteriaReportProperties };
// ReportFloodlightCriteria
/**
 * The report criteria for a report of type "FLOODLIGHT".
**/
var ReportFloodlightCriteria = /** @class */ (function (_super) {
    __extends(ReportFloodlightCriteria, _super);
    function ReportFloodlightCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customRichMediaEvents", elemType: DimensionValue }),
        __metadata("design:type", Array)
    ], ReportFloodlightCriteria.prototype, "customRichMediaEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRange" }),
        __metadata("design:type", DateRange)
    ], ReportFloodlightCriteria.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionFilters", elemType: DimensionValue }),
        __metadata("design:type", Array)
    ], ReportFloodlightCriteria.prototype, "dimensionFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions", elemType: SortedDimension }),
        __metadata("design:type", Array)
    ], ReportFloodlightCriteria.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightConfigId" }),
        __metadata("design:type", DimensionValue)
    ], ReportFloodlightCriteria.prototype, "floodlightConfigId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricNames" }),
        __metadata("design:type", Array)
    ], ReportFloodlightCriteria.prototype, "metricNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportProperties" }),
        __metadata("design:type", ReportFloodlightCriteriaReportProperties)
    ], ReportFloodlightCriteria.prototype, "reportProperties", void 0);
    return ReportFloodlightCriteria;
}(SpeakeasyBase));
export { ReportFloodlightCriteria };
export var ReportFormatEnum;
(function (ReportFormatEnum) {
    ReportFormatEnum["Csv"] = "CSV";
    ReportFormatEnum["Excel"] = "EXCEL";
})(ReportFormatEnum || (ReportFormatEnum = {}));
// ReportPathAttributionCriteria
/**
 * The report criteria for a report of type "PATH_ATTRIBUTION".
**/
var ReportPathAttributionCriteria = /** @class */ (function (_super) {
    __extends(ReportPathAttributionCriteria, _super);
    function ReportPathAttributionCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityFilters", elemType: DimensionValue }),
        __metadata("design:type", Array)
    ], ReportPathAttributionCriteria.prototype, "activityFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customChannelGrouping" }),
        __metadata("design:type", ChannelGrouping)
    ], ReportPathAttributionCriteria.prototype, "customChannelGrouping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRange" }),
        __metadata("design:type", DateRange)
    ], ReportPathAttributionCriteria.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions", elemType: SortedDimension }),
        __metadata("design:type", Array)
    ], ReportPathAttributionCriteria.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightConfigId" }),
        __metadata("design:type", DimensionValue)
    ], ReportPathAttributionCriteria.prototype, "floodlightConfigId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricNames" }),
        __metadata("design:type", Array)
    ], ReportPathAttributionCriteria.prototype, "metricNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pathFilters", elemType: PathFilter }),
        __metadata("design:type", Array)
    ], ReportPathAttributionCriteria.prototype, "pathFilters", void 0);
    return ReportPathAttributionCriteria;
}(SpeakeasyBase));
export { ReportPathAttributionCriteria };
// ReportPathCriteria
/**
 * The report criteria for a report of type "PATH".
**/
var ReportPathCriteria = /** @class */ (function (_super) {
    __extends(ReportPathCriteria, _super);
    function ReportPathCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityFilters", elemType: DimensionValue }),
        __metadata("design:type", Array)
    ], ReportPathCriteria.prototype, "activityFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customChannelGrouping" }),
        __metadata("design:type", ChannelGrouping)
    ], ReportPathCriteria.prototype, "customChannelGrouping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRange" }),
        __metadata("design:type", DateRange)
    ], ReportPathCriteria.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions", elemType: SortedDimension }),
        __metadata("design:type", Array)
    ], ReportPathCriteria.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightConfigId" }),
        __metadata("design:type", DimensionValue)
    ], ReportPathCriteria.prototype, "floodlightConfigId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricNames" }),
        __metadata("design:type", Array)
    ], ReportPathCriteria.prototype, "metricNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pathFilters", elemType: PathFilter }),
        __metadata("design:type", Array)
    ], ReportPathCriteria.prototype, "pathFilters", void 0);
    return ReportPathCriteria;
}(SpeakeasyBase));
export { ReportPathCriteria };
// ReportPathToConversionCriteriaReportProperties
/**
 * The properties of the report.
**/
var ReportPathToConversionCriteriaReportProperties = /** @class */ (function (_super) {
    __extends(ReportPathToConversionCriteriaReportProperties, _super);
    function ReportPathToConversionCriteriaReportProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clicksLookbackWindow" }),
        __metadata("design:type", Number)
    ], ReportPathToConversionCriteriaReportProperties.prototype, "clicksLookbackWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impressionsLookbackWindow" }),
        __metadata("design:type", Number)
    ], ReportPathToConversionCriteriaReportProperties.prototype, "impressionsLookbackWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeAttributedIPConversions" }),
        __metadata("design:type", Boolean)
    ], ReportPathToConversionCriteriaReportProperties.prototype, "includeAttributedIpConversions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeUnattributedCookieConversions" }),
        __metadata("design:type", Boolean)
    ], ReportPathToConversionCriteriaReportProperties.prototype, "includeUnattributedCookieConversions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includeUnattributedIPConversions" }),
        __metadata("design:type", Boolean)
    ], ReportPathToConversionCriteriaReportProperties.prototype, "includeUnattributedIpConversions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumClickInteractions" }),
        __metadata("design:type", Number)
    ], ReportPathToConversionCriteriaReportProperties.prototype, "maximumClickInteractions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumImpressionInteractions" }),
        __metadata("design:type", Number)
    ], ReportPathToConversionCriteriaReportProperties.prototype, "maximumImpressionInteractions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximumInteractionGap" }),
        __metadata("design:type", Number)
    ], ReportPathToConversionCriteriaReportProperties.prototype, "maximumInteractionGap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pivotOnInteractionPath" }),
        __metadata("design:type", Boolean)
    ], ReportPathToConversionCriteriaReportProperties.prototype, "pivotOnInteractionPath", void 0);
    return ReportPathToConversionCriteriaReportProperties;
}(SpeakeasyBase));
export { ReportPathToConversionCriteriaReportProperties };
// ReportPathToConversionCriteria
/**
 * The report criteria for a report of type "PATH_TO_CONVERSION".
**/
var ReportPathToConversionCriteria = /** @class */ (function (_super) {
    __extends(ReportPathToConversionCriteria, _super);
    function ReportPathToConversionCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activityFilters", elemType: DimensionValue }),
        __metadata("design:type", Array)
    ], ReportPathToConversionCriteria.prototype, "activityFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversionDimensions", elemType: SortedDimension }),
        __metadata("design:type", Array)
    ], ReportPathToConversionCriteria.prototype, "conversionDimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFloodlightVariables", elemType: SortedDimension }),
        __metadata("design:type", Array)
    ], ReportPathToConversionCriteria.prototype, "customFloodlightVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customRichMediaEvents", elemType: DimensionValue }),
        __metadata("design:type", Array)
    ], ReportPathToConversionCriteria.prototype, "customRichMediaEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRange" }),
        __metadata("design:type", DateRange)
    ], ReportPathToConversionCriteria.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightConfigId" }),
        __metadata("design:type", DimensionValue)
    ], ReportPathToConversionCriteria.prototype, "floodlightConfigId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricNames" }),
        __metadata("design:type", Array)
    ], ReportPathToConversionCriteria.prototype, "metricNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perInteractionDimensions", elemType: SortedDimension }),
        __metadata("design:type", Array)
    ], ReportPathToConversionCriteria.prototype, "perInteractionDimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportProperties" }),
        __metadata("design:type", ReportPathToConversionCriteriaReportProperties)
    ], ReportPathToConversionCriteria.prototype, "reportProperties", void 0);
    return ReportPathToConversionCriteria;
}(SpeakeasyBase));
export { ReportPathToConversionCriteria };
// ReportReachCriteria
/**
 * The report criteria for a report of type "REACH".
**/
var ReportReachCriteria = /** @class */ (function (_super) {
    __extends(ReportReachCriteria, _super);
    function ReportReachCriteria() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activities" }),
        __metadata("design:type", Activities)
    ], ReportReachCriteria.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customRichMediaEvents" }),
        __metadata("design:type", CustomRichMediaEvents)
    ], ReportReachCriteria.prototype, "customRichMediaEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRange" }),
        __metadata("design:type", DateRange)
    ], ReportReachCriteria.prototype, "dateRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionFilters", elemType: DimensionValue }),
        __metadata("design:type", Array)
    ], ReportReachCriteria.prototype, "dimensionFilters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions", elemType: SortedDimension }),
        __metadata("design:type", Array)
    ], ReportReachCriteria.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableAllDimensionCombinations" }),
        __metadata("design:type", Boolean)
    ], ReportReachCriteria.prototype, "enableAllDimensionCombinations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricNames" }),
        __metadata("design:type", Array)
    ], ReportReachCriteria.prototype, "metricNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reachByFrequencyMetricNames" }),
        __metadata("design:type", Array)
    ], ReportReachCriteria.prototype, "reachByFrequencyMetricNames", void 0);
    return ReportReachCriteria;
}(SpeakeasyBase));
export { ReportReachCriteria };
export var ReportScheduleRepeatsOnWeekDaysEnum;
(function (ReportScheduleRepeatsOnWeekDaysEnum) {
    ReportScheduleRepeatsOnWeekDaysEnum["Sunday"] = "SUNDAY";
    ReportScheduleRepeatsOnWeekDaysEnum["Monday"] = "MONDAY";
    ReportScheduleRepeatsOnWeekDaysEnum["Tuesday"] = "TUESDAY";
    ReportScheduleRepeatsOnWeekDaysEnum["Wednesday"] = "WEDNESDAY";
    ReportScheduleRepeatsOnWeekDaysEnum["Thursday"] = "THURSDAY";
    ReportScheduleRepeatsOnWeekDaysEnum["Friday"] = "FRIDAY";
    ReportScheduleRepeatsOnWeekDaysEnum["Saturday"] = "SATURDAY";
})(ReportScheduleRepeatsOnWeekDaysEnum || (ReportScheduleRepeatsOnWeekDaysEnum = {}));
export var ReportScheduleRunsOnDayOfMonthEnum;
(function (ReportScheduleRunsOnDayOfMonthEnum) {
    ReportScheduleRunsOnDayOfMonthEnum["DayOfMonth"] = "DAY_OF_MONTH";
    ReportScheduleRunsOnDayOfMonthEnum["WeekOfMonth"] = "WEEK_OF_MONTH";
})(ReportScheduleRunsOnDayOfMonthEnum || (ReportScheduleRunsOnDayOfMonthEnum = {}));
// ReportSchedule
/**
 * The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY".
**/
var ReportSchedule = /** @class */ (function (_super) {
    __extends(ReportSchedule, _super);
    function ReportSchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], ReportSchedule.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=every" }),
        __metadata("design:type", Number)
    ], ReportSchedule.prototype, "every", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationDate" }),
        __metadata("design:type", Date)
    ], ReportSchedule.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeats" }),
        __metadata("design:type", String)
    ], ReportSchedule.prototype, "repeats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repeatsOnWeekDays" }),
        __metadata("design:type", Array)
    ], ReportSchedule.prototype, "repeatsOnWeekDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runsOnDayOfMonth" }),
        __metadata("design:type", String)
    ], ReportSchedule.prototype, "runsOnDayOfMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startDate" }),
        __metadata("design:type", Date)
    ], ReportSchedule.prototype, "startDate", void 0);
    return ReportSchedule;
}(SpeakeasyBase));
export { ReportSchedule };
export var ReportTypeEnum;
(function (ReportTypeEnum) {
    ReportTypeEnum["Standard"] = "STANDARD";
    ReportTypeEnum["Reach"] = "REACH";
    ReportTypeEnum["PathToConversion"] = "PATH_TO_CONVERSION";
    ReportTypeEnum["CrossDimensionReach"] = "CROSS_DIMENSION_REACH";
    ReportTypeEnum["Floodlight"] = "FLOODLIGHT";
    ReportTypeEnum["Path"] = "PATH";
    ReportTypeEnum["PathAttribution"] = "PATH_ATTRIBUTION";
})(ReportTypeEnum || (ReportTypeEnum = {}));
// Report
/**
 * Represents a Report resource.
**/
var Report = /** @class */ (function (_super) {
    __extends(Report, _super);
    function Report() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], Report.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=criteria" }),
        __metadata("design:type", ReportCriteria)
    ], Report.prototype, "criteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crossDimensionReachCriteria" }),
        __metadata("design:type", ReportCrossDimensionReachCriteria)
    ], Report.prototype, "crossDimensionReachCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delivery" }),
        __metadata("design:type", ReportDelivery)
    ], Report.prototype, "delivery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Report.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileName" }),
        __metadata("design:type", String)
    ], Report.prototype, "fileName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floodlightCriteria" }),
        __metadata("design:type", ReportFloodlightCriteria)
    ], Report.prototype, "floodlightCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], Report.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Report.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Report.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedTime" }),
        __metadata("design:type", String)
    ], Report.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Report.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerProfileId" }),
        __metadata("design:type", String)
    ], Report.prototype, "ownerProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pathAttributionCriteria" }),
        __metadata("design:type", ReportPathAttributionCriteria)
    ], Report.prototype, "pathAttributionCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pathCriteria" }),
        __metadata("design:type", ReportPathCriteria)
    ], Report.prototype, "pathCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pathToConversionCriteria" }),
        __metadata("design:type", ReportPathToConversionCriteria)
    ], Report.prototype, "pathToConversionCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reachCriteria" }),
        __metadata("design:type", ReportReachCriteria)
    ], Report.prototype, "reachCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule" }),
        __metadata("design:type", ReportSchedule)
    ], Report.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subAccountId" }),
        __metadata("design:type", String)
    ], Report.prototype, "subAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Report.prototype, "type", void 0);
    return Report;
}(SpeakeasyBase));
export { Report };
