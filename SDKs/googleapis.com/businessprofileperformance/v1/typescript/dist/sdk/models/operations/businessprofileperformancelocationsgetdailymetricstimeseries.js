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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams = /** @class */ (function (_super) {
    __extends(BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams, _super);
    function BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams.prototype, "name", void 0);
    return BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams;
}(SpeakeasyBase));
export { BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams };
export var BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum;
(function (BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum) {
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum["DailyMetricUnknown"] = "DAILY_METRIC_UNKNOWN";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum["BusinessImpressionsDesktopMaps"] = "BUSINESS_IMPRESSIONS_DESKTOP_MAPS";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum["BusinessImpressionsDesktopSearch"] = "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum["BusinessImpressionsMobileMaps"] = "BUSINESS_IMPRESSIONS_MOBILE_MAPS";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum["BusinessImpressionsMobileSearch"] = "BUSINESS_IMPRESSIONS_MOBILE_SEARCH";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum["BusinessConversations"] = "BUSINESS_CONVERSATIONS";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum["BusinessDirectionRequests"] = "BUSINESS_DIRECTION_REQUESTS";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum["CallClicks"] = "CALL_CLICKS";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum["WebsiteClicks"] = "WEBSITE_CLICKS";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum["BusinessBookings"] = "BUSINESS_BOOKINGS";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum["BusinessFoodOrders"] = "BUSINESS_FOOD_ORDERS";
})(BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum || (BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum = {}));
export var BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum;
(function (BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum) {
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum["DayOfWeekUnspecified"] = "DAY_OF_WEEK_UNSPECIFIED";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum["Monday"] = "MONDAY";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum["Tuesday"] = "TUESDAY";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum["Wednesday"] = "WEDNESDAY";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum["Thursday"] = "THURSDAY";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum["Friday"] = "FRIDAY";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum["Saturday"] = "SATURDAY";
    BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum["Sunday"] = "SUNDAY";
})(BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum || (BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum = {}));
var BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams = /** @class */ (function (_super) {
    __extends(BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams, _super);
    function BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dailyMetric" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "dailyMetric", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dailyRange.endDate.day" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "dailyRangeEndDateDay", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dailyRange.endDate.month" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "dailyRangeEndDateMonth", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dailyRange.endDate.year" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "dailyRangeEndDateYear", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dailyRange.startDate.day" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "dailyRangeStartDateDay", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dailyRange.startDate.month" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "dailyRangeStartDateMonth", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dailyRange.startDate.year" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "dailyRangeStartDateYear", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.dayOfWeek" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "dailySubEntityTypeDayOfWeek", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.timeOfDay.hours" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "dailySubEntityTypeTimeOfDayHours", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.timeOfDay.minutes" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "dailySubEntityTypeTimeOfDayMinutes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.timeOfDay.nanos" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "dailySubEntityTypeTimeOfDayNanos", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dailySubEntityType.timeOfDay.seconds" }),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "dailySubEntityTypeTimeOfDaySeconds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams.prototype, "uploadProtocol", void 0);
    return BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams;
}(SpeakeasyBase));
export { BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams };
var BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest = /** @class */ (function (_super) {
    __extends(BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest, _super);
    function BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesQueryParams)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest.prototype, "queryParams", void 0);
    return BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest;
}(SpeakeasyBase));
export { BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest };
var BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse = /** @class */ (function (_super) {
    __extends(BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse, _super);
    function BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetDailyMetricsTimeSeriesResponse)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse.prototype, "getDailyMetricsTimeSeriesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse.prototype, "statusCode", void 0);
    return BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse;
}(SpeakeasyBase));
export { BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse };
