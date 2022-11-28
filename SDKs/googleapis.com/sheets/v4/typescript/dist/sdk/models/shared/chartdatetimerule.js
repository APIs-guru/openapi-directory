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
export var ChartDateTimeRuleTypeEnum;
(function (ChartDateTimeRuleTypeEnum) {
    ChartDateTimeRuleTypeEnum["ChartDateTimeRuleTypeUnspecified"] = "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED";
    ChartDateTimeRuleTypeEnum["Second"] = "SECOND";
    ChartDateTimeRuleTypeEnum["Minute"] = "MINUTE";
    ChartDateTimeRuleTypeEnum["Hour"] = "HOUR";
    ChartDateTimeRuleTypeEnum["HourMinute"] = "HOUR_MINUTE";
    ChartDateTimeRuleTypeEnum["HourMinuteAmpm"] = "HOUR_MINUTE_AMPM";
    ChartDateTimeRuleTypeEnum["DayOfWeek"] = "DAY_OF_WEEK";
    ChartDateTimeRuleTypeEnum["DayOfYear"] = "DAY_OF_YEAR";
    ChartDateTimeRuleTypeEnum["DayOfMonth"] = "DAY_OF_MONTH";
    ChartDateTimeRuleTypeEnum["DayMonth"] = "DAY_MONTH";
    ChartDateTimeRuleTypeEnum["Month"] = "MONTH";
    ChartDateTimeRuleTypeEnum["Quarter"] = "QUARTER";
    ChartDateTimeRuleTypeEnum["Year"] = "YEAR";
    ChartDateTimeRuleTypeEnum["YearMonth"] = "YEAR_MONTH";
    ChartDateTimeRuleTypeEnum["YearQuarter"] = "YEAR_QUARTER";
    ChartDateTimeRuleTypeEnum["YearMonthDay"] = "YEAR_MONTH_DAY";
})(ChartDateTimeRuleTypeEnum || (ChartDateTimeRuleTypeEnum = {}));
// ChartDateTimeRule
/**
 * Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values.
**/
var ChartDateTimeRule = /** @class */ (function (_super) {
    __extends(ChartDateTimeRule, _super);
    function ChartDateTimeRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ChartDateTimeRule.prototype, "type", void 0);
    return ChartDateTimeRule;
}(SpeakeasyBase));
export { ChartDateTimeRule };
