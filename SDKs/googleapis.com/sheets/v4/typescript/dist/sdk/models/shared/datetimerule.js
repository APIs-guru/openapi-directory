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
export var DateTimeRuleTypeEnum;
(function (DateTimeRuleTypeEnum) {
    DateTimeRuleTypeEnum["DateTimeRuleTypeUnspecified"] = "DATE_TIME_RULE_TYPE_UNSPECIFIED";
    DateTimeRuleTypeEnum["Second"] = "SECOND";
    DateTimeRuleTypeEnum["Minute"] = "MINUTE";
    DateTimeRuleTypeEnum["Hour"] = "HOUR";
    DateTimeRuleTypeEnum["HourMinute"] = "HOUR_MINUTE";
    DateTimeRuleTypeEnum["HourMinuteAmpm"] = "HOUR_MINUTE_AMPM";
    DateTimeRuleTypeEnum["DayOfWeek"] = "DAY_OF_WEEK";
    DateTimeRuleTypeEnum["DayOfYear"] = "DAY_OF_YEAR";
    DateTimeRuleTypeEnum["DayOfMonth"] = "DAY_OF_MONTH";
    DateTimeRuleTypeEnum["DayMonth"] = "DAY_MONTH";
    DateTimeRuleTypeEnum["Month"] = "MONTH";
    DateTimeRuleTypeEnum["Quarter"] = "QUARTER";
    DateTimeRuleTypeEnum["Year"] = "YEAR";
    DateTimeRuleTypeEnum["YearMonth"] = "YEAR_MONTH";
    DateTimeRuleTypeEnum["YearQuarter"] = "YEAR_QUARTER";
    DateTimeRuleTypeEnum["YearMonthDay"] = "YEAR_MONTH_DAY";
})(DateTimeRuleTypeEnum || (DateTimeRuleTypeEnum = {}));
// DateTimeRule
/**
 * Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. For example, consider a pivot table showing sales transactions by date: +----------+--------------+ | Date | SUM of Sales | +----------+--------------+ | 1/1/2017 | $621.14 | | 2/3/2017 | $708.84 | | 5/8/2017 | $326.84 | ... +----------+--------------+ Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH results in the following pivot table. +--------------+--------------+ | Grouped Date | SUM of Sales | +--------------+--------------+ | 2017-Jan | $53,731.78 | | 2017-Feb | $83,475.32 | | 2017-Mar | $94,385.05 | ... +--------------+--------------+
**/
var DateTimeRule = /** @class */ (function (_super) {
    __extends(DateTimeRule, _super);
    function DateTimeRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DateTimeRule.prototype, "type", void 0);
    return DateTimeRule;
}(SpeakeasyBase));
export { DateTimeRule };
