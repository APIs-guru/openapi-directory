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
export var RunQueryRequestDataRangeEnum;
(function (RunQueryRequestDataRangeEnum) {
    RunQueryRequestDataRangeEnum["CustomDates"] = "CUSTOM_DATES";
    RunQueryRequestDataRangeEnum["CurrentDay"] = "CURRENT_DAY";
    RunQueryRequestDataRangeEnum["PreviousDay"] = "PREVIOUS_DAY";
    RunQueryRequestDataRangeEnum["WeekToDate"] = "WEEK_TO_DATE";
    RunQueryRequestDataRangeEnum["MonthToDate"] = "MONTH_TO_DATE";
    RunQueryRequestDataRangeEnum["QuarterToDate"] = "QUARTER_TO_DATE";
    RunQueryRequestDataRangeEnum["YearToDate"] = "YEAR_TO_DATE";
    RunQueryRequestDataRangeEnum["PreviousWeek"] = "PREVIOUS_WEEK";
    RunQueryRequestDataRangeEnum["PreviousHalfMonth"] = "PREVIOUS_HALF_MONTH";
    RunQueryRequestDataRangeEnum["PreviousMonth"] = "PREVIOUS_MONTH";
    RunQueryRequestDataRangeEnum["PreviousQuarter"] = "PREVIOUS_QUARTER";
    RunQueryRequestDataRangeEnum["PreviousYear"] = "PREVIOUS_YEAR";
    RunQueryRequestDataRangeEnum["Last7Days"] = "LAST_7_DAYS";
    RunQueryRequestDataRangeEnum["Last30Days"] = "LAST_30_DAYS";
    RunQueryRequestDataRangeEnum["Last90Days"] = "LAST_90_DAYS";
    RunQueryRequestDataRangeEnum["Last365Days"] = "LAST_365_DAYS";
    RunQueryRequestDataRangeEnum["AllTime"] = "ALL_TIME";
    RunQueryRequestDataRangeEnum["Last14Days"] = "LAST_14_DAYS";
    RunQueryRequestDataRangeEnum["TypeNotSupported"] = "TYPE_NOT_SUPPORTED";
    RunQueryRequestDataRangeEnum["Last60Days"] = "LAST_60_DAYS";
})(RunQueryRequestDataRangeEnum || (RunQueryRequestDataRangeEnum = {}));
// RunQueryRequest
/**
 * Request to run a stored query to generate a report.
**/
var RunQueryRequest = /** @class */ (function (_super) {
    __extends(RunQueryRequest, _super);
    function RunQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=dataRange" }),
        __metadata("design:type", String)
    ], RunQueryRequest.prototype, "dataRange", void 0);
    __decorate([
        Metadata({ data: "json, name=reportDataEndTimeMs" }),
        __metadata("design:type", String)
    ], RunQueryRequest.prototype, "reportDataEndTimeMs", void 0);
    __decorate([
        Metadata({ data: "json, name=reportDataStartTimeMs" }),
        __metadata("design:type", String)
    ], RunQueryRequest.prototype, "reportDataStartTimeMs", void 0);
    __decorate([
        Metadata({ data: "json, name=timezoneCode" }),
        __metadata("design:type", String)
    ], RunQueryRequest.prototype, "timezoneCode", void 0);
    return RunQueryRequest;
}(SpeakeasyBase));
export { RunQueryRequest };
