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
import { Date } from "./date";
export var DataRangeRangeEnum;
(function (DataRangeRangeEnum) {
    DataRangeRangeEnum["RangeUnspecified"] = "RANGE_UNSPECIFIED";
    DataRangeRangeEnum["CustomDates"] = "CUSTOM_DATES";
    DataRangeRangeEnum["CurrentDay"] = "CURRENT_DAY";
    DataRangeRangeEnum["PreviousDay"] = "PREVIOUS_DAY";
    DataRangeRangeEnum["WeekToDate"] = "WEEK_TO_DATE";
    DataRangeRangeEnum["MonthToDate"] = "MONTH_TO_DATE";
    DataRangeRangeEnum["QuarterToDate"] = "QUARTER_TO_DATE";
    DataRangeRangeEnum["YearToDate"] = "YEAR_TO_DATE";
    DataRangeRangeEnum["PreviousWeek"] = "PREVIOUS_WEEK";
    DataRangeRangeEnum["PreviousMonth"] = "PREVIOUS_MONTH";
    DataRangeRangeEnum["PreviousQuarter"] = "PREVIOUS_QUARTER";
    DataRangeRangeEnum["PreviousYear"] = "PREVIOUS_YEAR";
    DataRangeRangeEnum["Last7Days"] = "LAST_7_DAYS";
    DataRangeRangeEnum["Last30Days"] = "LAST_30_DAYS";
    DataRangeRangeEnum["Last90Days"] = "LAST_90_DAYS";
    DataRangeRangeEnum["Last365Days"] = "LAST_365_DAYS";
    DataRangeRangeEnum["AllTime"] = "ALL_TIME";
    DataRangeRangeEnum["Last14Days"] = "LAST_14_DAYS";
    DataRangeRangeEnum["Last60Days"] = "LAST_60_DAYS";
})(DataRangeRangeEnum || (DataRangeRangeEnum = {}));
// DataRange
/**
 * Report data range.
**/
var DataRange = /** @class */ (function (_super) {
    __extends(DataRange, _super);
    function DataRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customEndDate" }),
        __metadata("design:type", Date)
    ], DataRange.prototype, "customEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customStartDate" }),
        __metadata("design:type", Date)
    ], DataRange.prototype, "customStartDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=range" }),
        __metadata("design:type", String)
    ], DataRange.prototype, "range", void 0);
    return DataRange;
}(SpeakeasyBase));
export { DataRange };
